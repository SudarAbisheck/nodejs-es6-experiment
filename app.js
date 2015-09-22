"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2["default"])();

app.set("port", process.env.PORT || 5000);

app.use(_express2["default"]["static"](__dirname + '/public'));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(function (req, res, next) {
    console.log("middleware hoo !!!!");
    next();
});
app.get("/", function (req, res) {
    res.render("pages/index");
});

app.get("/redirect", function (req, res) {
    return res.redirect("http://www.sudar.me");
});
app.get('/details/:id/:name', function (req, res, next) {
    if (req.params.id == 234) next("route");
    res.json("{\"id\" : " + req.params.id + ", \"name\": \"" + req.params.name + "\", \"msg\": \"First get caught the request\"}");
});

app.get("/details/:id/:name", function (req, res) {
    return res.send("Details:  " + req.params.id + " " + req.params.name);
});

var server = app.listen(app.get("port"), function () {
    console.log("Server running at port " + app.get("port"));
});
//# sourceMappingURL=app.js.map