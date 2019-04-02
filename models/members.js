const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create new schema
const memberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    validate: {
      validator: function isUnique(email) {
        return Member
        .findOne({
          email
        })
        .then((member) => {
          if(member) {
            return false
          }
        })
      },
      message: 'Email already exist'
    }
  },
  phone: {
    type: Number,
    require: true,
    minlength: 11,
    maxLength: 13
  }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member

