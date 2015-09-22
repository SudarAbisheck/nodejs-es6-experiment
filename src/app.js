import express from "express";
let app = express();

app.set("port",(process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.set("views", __dirname + "/views");
app.set("view engine" ,"ejs");

app.use((req,res,next)=> {
    console.log("middleware hoo !!!!");
    next();
});
app.get("/",(req,res)=>{
    res.render("pages/index");
});

app.get("/redirect",(req,res)=> res.redirect("http://www.sudar.me"));
app.get('/details/:id/:name', (req,res,next)=> {
    if(req.params.id == 234) next("route");
    res.json(`{"id" : ${req.params.id}, "name": "${req.params.name}", "msg": "First get caught the request"}`);
});

app.get("/details/:id/:name", (req,res)=> res.send("Details:  "+ req.params.id + " " + req.params.name));

var server = app.listen(app.get("port"), ()=>{
    console.log("Server running at port " + app.get("port"));
})