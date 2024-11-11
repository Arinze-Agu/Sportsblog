//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var homeStartingContent = "jkhusn hsjhksns sjisnsjknsl sjksjlsks sjojsklsj sjsjklsms sjsjhrjlff";
var aboutContent = "hjshdkhj djhdhjklc ccjklc djhjdmd djodjdkl djdiokdidkdopkd";
var contactContent = "hjks djkdnd djkdn fldnd fjkld f;lkf fkf;kfflfmr jtrlkjr jrljrlrrkl jffk;fj";

app.get ("/", function(req, res){
  res.render("home", { home : homeStartingContent });
});

app.get ("/about", function (req, res){
  res.render("about", {about : aboutContent});
});

app.get ("/contact", function (req, res){
  res.render("contact", {contact : contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  console.log(req.body);
  console.log(req.body.composeWord);
});


 







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
