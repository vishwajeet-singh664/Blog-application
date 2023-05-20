const{ index, create, show, update, destroy}= require("../controllers/comments")

const router = require("express").Router()

router.get("/", index)
router.get("/:id", show)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports=router
