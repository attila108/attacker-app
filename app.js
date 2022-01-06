const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send("Attacks from here");
    res.render("attack");
})






app.listen(666, () => {
    console.log("Listening on port 666");
})