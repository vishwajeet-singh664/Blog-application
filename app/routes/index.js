module.exports=function(app){
  app.use("/users",require("./users"))
  app.use("/posts",require("./posts"))
  app.use("/comments",require("./comments"))
  app.use("/likes",require("./likes"))
}