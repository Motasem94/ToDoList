const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    res.render("list",{kindOfDay: weekday[currentDay]});
})









app.listen(3000, () => {
    console.log("server started @ port 3000");
})