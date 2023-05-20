const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
like: {
      type: Boolean,
   },
dislike: {
    type: Boolean,
    },   
post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
   },
user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   }
})

const Like = mongoose.model("Like", likeSchema)
module.exports = Like