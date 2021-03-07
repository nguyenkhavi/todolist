// import morgan from "morgan"
const express = require("express")
// import compression from "compression"
// import helmet from "helmet"
// import cors from "cors"
// import bodyParser from 'body-parser'

module.exports = app => {
    app.use(express.json({ limit: '1024mb', extended: true }));
    app.use(express.urlencoded({ limit: "1024mb", extended: true, parameterLimit: 50000 }));
    // app.use(express.json())
    // app.use(cors())

    // app.use(bodyParser.json({ limit: '50mb' }));
    // app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

    // if (process.env.NODE_ENV) {
    //     app.use(morgan("dev"))
    // } else {
    //     app.use(compression())
    //     app.use(helmet())
    //     app.use(morgan("common"))
    // }
}
