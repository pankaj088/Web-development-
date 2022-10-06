const express = require("express");
const path = require("path");
// const fs = require("fs")
const app = express();
const port = 800;

// Express Specific stuff
// app.use(express.static('static', Option))

app.use('/static', express.static('static')) // For Serving static files
app.use(express.urlencoded())


//PUG Specific Stuff
app.set('view engine', 'pug') // set the templeate engine as pug
app.set('views', path.join(__dirname, 'views')) // set the views directory


// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index.pug', params);
});


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started suceesfully on port ${port}`);
});