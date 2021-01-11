const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    var today = new Date();
    var currentDay = today;
    if (currentDay === 6 || currentDay === 0) {
        res.send("Yaaay it's the weekend!");
    } else {
        res.sendFile(__dirname+"/index.html");
    }
})









app.listen(3000, () => {
    console.log("server started @ port 3000");
})