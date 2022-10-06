const express = require("express")

const app = express();
const port = 80;

// For serving static files
app.use('\static', express.static('static'))

app.get("/", (req, res) => {
    res.send("This is my first express app with pankaj")
});

app.listen(port, () => {
    console.log('The application started succesfully on port ${port}')
})