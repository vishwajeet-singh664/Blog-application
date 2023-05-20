const { Like } = require("../models")

exports.index = async (req, res) => {
  try {
    const likes = await Like.find()
    res.send(likes)
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.show = async (req, res) => {
  try {
    const like = await Like.findOne({
      _id: req.params.id
    }).populate("post").populate('user')

    if (like)
      res.send(like)
    else
      res.status(404).send({
        message: `like not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.create = async (req, res) => {
  try {
    if(req.body && req.body.like && req.body.dislike){
        res.status(422).send({
            message: "Cannot like and dislike both"
        })
    }
    else{
    const like = await Like.create({
      ...req.body
    })

    if (like)
      res.send(like)
  }}
  catch (err) {
    res.status(422).send({
      message: err.message
    })
  }
}

exports.update = async (req, res) => {
  try {
    const like = await Like.updateOne({
      _id: req.params.id
    }, {
      ...req.body
    })

    if (like)
      res.send(like)
    else
      res.status(404).send({
        message: `Like not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.destroy = async (req, res) => {
  try {
    const like = await Like.deleteOne({
      _id: req.params.id
    })

    if (like)
      res.send(like)
    else
      res.status(404).send({
        message: `Like not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}