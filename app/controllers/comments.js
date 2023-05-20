const { Comment } = require("../models")

exports.index = async (req, res) => {
  try {
    const comments = await Comment.find()
    res.send(comments)
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}

exports.show = async (req, res) => {
  try {
    const comment = await Comment.findOne({
      _id: req.params.id
    }).populate("post").populate('user')

    if (comment)
      res.send(comment)
    else
      res.status(404).send({
        message: `Post not found by id ${req.params.id}`
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
    const comment = await Comment.create({
      ...req.body
    })

    if (comment)
      res.send(comment)
  }
  catch (err) {
    res.status(422).json({
      message: "ressddf", status: false
    })
  }
}

exports.update = async (req, res) => {
  try {
    const comment = await Comment.updateOne({
      _id: req.params.id
    }, {
      ...req.body
    })

    if (comment)
      res.send(comment)
    else
      res.status(404).send({
        message: `Post not found by id ${req.params.id}`
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
    const comment = await Comment.deleteOne({
      _id: req.params.id
    })

    if (comment)
      res.send(comment)
    else
      res.status(404).send({
        message: `Comment not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({
      message: "Something went wrong!"
    })
  }
}
