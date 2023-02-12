const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})
app.post("/",function(req,res){
    var num1 = Number(req.body.num1); 
    var num2 = Number(req.body.num2);
    var result = num1 * num2
    res.send("Thank for post: " + result)
})


app.get("/bmicolculotor", function(req,res){
    res.sendFile(__dirname + "/bmiColculotor.html")
})
app.post("/bmicolculotor", function(res,req){
    var weight = (req.body.weight);
    var height = (req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BNI is: " + bmi)
})
app.listen(3000, function(){
    console.log("server started 3000")
});