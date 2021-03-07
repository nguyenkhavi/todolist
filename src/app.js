const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const http = require('http');
const routes = require('./routes/index')
const bodyParser = require('body-parser');
const middleware = require('./services/middleware');

const app = express();
const server = http.createServer(app)




server.listen(process.env.PORT, () => {
    console.log(
        `Server is running on port: ${process.env.PORT}...`
    )
    middleware(app)
    routes(app)

})