const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down and pass it around</a>
    `);

});

app.get('/:number_of_bottles', (req, res) => {
    let number = (req.params.number_of_bottles)
    if (number == 0){
        res.send(`<h1>No more bottles of beer</h1> <a href='/'>Go back to home-page</a>`)  
    } else if (number == 1) {
        res.send(`<h1> ${number} Bottle of beer on the wall </h1> <a href='/${number-1}'>Take it down and pass it around</a>`)  
    } else {
        res.send(`<h1> ${number} Bottles of beer on the wall </h1> <a href='/${number-1}'>Take one down and pass it around</a>`)
    }
});

app.listen(PORT,() => {
    console.log('listening on port' , PORT);
});