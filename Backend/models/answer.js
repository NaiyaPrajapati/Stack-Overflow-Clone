var mongoose = require('mongoose')

var answerSchema = mongoose.Schema({

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
    uname:{
          type : String,
          default : "",
      },
    q_id:{
        type:String
    }
})

module.exports = mongoose.model('answer', answerSchema)
