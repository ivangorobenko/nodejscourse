const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next();
})

app.use((req, res, next) => {
    console.log("In an other the middleware");
    res.send("<h1>Hello from Assignment !</h1>")
})

//WTF : sous chrome quand tu lances la page localhost:3000/
// la page se charge 2 fois (On voit apparaire les console.log 2 fois
// sous firefox qu'une fois
app.listen(3000)