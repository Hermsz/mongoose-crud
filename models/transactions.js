const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create new schema
const transactionSchema = new Schema({
  member: [{
    type: Schema.Types.ObjectId,
    ref: 'Member',
  }],
  in_date: Date,
  out_date: {
    type: Date,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  fine: {type: Number, Default: 0 },
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

transactionSchema.post('findOneAndUpdate', (updatedData, next) => {

  let daysBetween = updatedData.in_date.getDate() - updatedData.due_date.getDate()
  
  if(daysBetween > 0) {
    updatedData.fine = daysBetween * 1000
  }
  updatedData.save()
  next()
})



const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction