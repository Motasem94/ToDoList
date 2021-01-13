const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let today = new Date();
    let options ={
        weekday:'long',
        day:'numeric',
        month:'long'
    };
    let day = today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle: day, newListItems: items});
})

app.post("/",(req,res)=>{
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle: "Work", newListItems: workItems})
})









app.listen(3000, () => {
    console.log("server started @ port 3000");
})