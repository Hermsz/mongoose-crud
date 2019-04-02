const  Transaction  = require('../models/transactions')

class TransactionsController {

  static findAll(req, res) {
    Transaction
      .find({})
      .populate('booklist')
      .populate('member')
      .then(transactionList => {
        res.status(200).json(transactionList)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOne(req, res) {
    Transaction
      .findById(req.params.id)
      .populate('booklist')
      .populate('member')
      .then(transaction => {
        res.status(200).json(transaction)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    let newTransaction = {
      member: req.body.member,
      in_date: req.body.in_date,
      out_date: new Date(),
      due_date: req.body.due_date,
      fine: req.body.fine,
      booklist: req.body.booklist
    }
    Transaction
      .create(newTransaction)
      .then(transactionCreated => {
        res.status(200).json(transactionCreated)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updatePut(req, res) {
    Transaction
      .findOneAndUpdate(
        {_id: req.params.id},
        {...req.body},
        {new: true}
      )
      .then(transaction => {
        res.status(200).json(transaction)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Transaction
      .findOneAndRemove(
        {_id: req.params.id}
      )
      .then(transaction => {
        res.status(200).json(transaction)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = TransactionsController