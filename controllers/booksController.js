const  Book  = require('../models/books')

class BooksController {

  static findAll(req, res) {
    let field = {}
    if(req.query.keyword) {
      field = {
        $or : [{
          author: {
            $regex: req.query.keyword,
            $options: 'i'
          }
        },{
          title: {
            $regex: req.query.keyword,
            $options: 'i'
          }
        }
        ]
      }
    }
    Book
      .find(field)
      .then(bookData => {
        res.status(200).json(bookData)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOne(req, res) {
    Book
      .findById(req.params.id)
      .then(book => {
        res.status(200).json(book)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    let newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Book
      .create(newBook)
      .then(bookCreated => {
        res.status(200).json(bookCreated)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  
  static updatePut(req, res) {
    Book
      .findOneAndUpdate(
        {_id: req.params.id},
        {author: req.body.author}
      )
      .then(book => {
        res.status(200).json(book.title)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updatePatch(req, res) {
    Book
      .findOneAndUpdate(
        {_id: req.params.id},
        {author: req.body.author}
      )
      .then(book => {
        res.status(200).json(book.title)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Book
      .findOneAndRemove(
        {_id: req.params.id}
      )
      .then(book => {
        res.status(200).json({
          message: `Successfully deleted ${book.title}`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = BooksController