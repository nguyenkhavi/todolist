const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/db.route')


const PORT = 3000;
const app = express();
app.use('/', express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(PORT, () => {
    console.log(
        `Server is running on port: ${PORT}...`
    )
})