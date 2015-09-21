import express from "express";
let app = express();

app.use((req,res,next)=> {
    console.log("middleware hoo !!!!");
    next();
});
app.get("/",(req,res)=>{
    res.send("root route working");
});

app.get('/details/:id/:name', (req,res,next)=> {
    if(req.params.id == 234) next("route");
    res.json(`{"id" : ${req.params.id}, "name": "${req.params.name}", "msg": "First get caught the request"}`);
});

app.get("/details/:id/:name", (req,res)=> res.send("Details:  "+ req.params.id + " " + req.params.name));

var server = app.listen(8005, ()=>{
    console.log("Server running at port 8005");
})