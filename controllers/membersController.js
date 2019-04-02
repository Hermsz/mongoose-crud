const  Member  = require('../models/members')

class MembersController {

  static findAll(req, res) {
    Member
      .find({})
      .then(memberList => {
        res.status(200).json(memberList)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOne(req, res) {
    Member
      .findById(req.params.id)
      .then(member => {
        res.status(200).json(member)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    let newMember = {
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      email: req.body.email,
      phone: req.body.phone
    }
    Member
      .create(newMember)
      .then(memberCreated => {
        res.status(200).json(memberCreated)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updatePut(req, res) {
    Member
      .findOneAndUpdate(
        {_id: req.params.id},
        {zipcode: req.body.zipcode}
      )
      .then(member => {
        res.status(200).json(member)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Member
      .findOneAndRemove(
        {_id: req.params.id}
      )
      .then(member => {
        res.status(200).json(member)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = MembersController