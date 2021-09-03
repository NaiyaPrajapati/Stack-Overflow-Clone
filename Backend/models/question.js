var mongoose = require('mongoose')

var questionSchema = mongoose.Schema({

    title: {
        type: String,
    },
    
    body:{
        type: String,
    },
    create_time: {
        type: Date,
        default: Date.now,
      },
    update_time: {
        type: Date,
        default: Date.now,
      },
    tags: {
        type: Array(String),
        default: [],
      },
    uname:{
          type : String,
          default : "",
      }
    // votes:{
    //   type:String
    // },
    // answers:{
    //   type:String
    // },
    // views:{
    //   type:String
    // }
})

module.exports = mongoose.model('question', questionSchema)
