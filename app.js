//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let postsArray= [];

const homeStartingContent = "jkhusn hsjhksns sjisnsjknsl sjksjlsks sjojsklsj sjsjklsms sjsjhrjlff";
const aboutContent = "hjshdkhj djhdhjklc ccjklc djhjdmd djodjdkl djdiokdidkdopkd";
const contactContent = "hjks djkdnd djkdn fldnd fjkld f;lkf fkf;kfflfmr jtrlkjr jrljrlrrkl jffk;fj";

app.get ("/", function(req, res){
  res.render("home", { home : homeStartingContent, postsArray : postsArray});
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
  const post = {
    composeWord : req.body.composeWord,
    composeMessage : req.body.composeMessage
  }
  postsArray.push(post);
 
  res.redirect("/");
});


 







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
