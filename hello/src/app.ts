import express = require('express')
import * as cmdLineOpts from './cmdLineOpts'

// Create a new express application instance
const app: express.Application = express()

app.get('/', function (req, res) {
    res.send(
        `Hello World!<br>`+
        `server started on `+
        `host <b>${cmdLineOpts.values.host}</b> `+
        `port <b>${cmdLineOpts.values.port}</b>`
    )
});

console.log( "cmdLineOpts.values:",cmdLineOpts.values )

app.listen(cmdLineOpts.values.port, cmdLineOpts.values.host, function () {
    console.log(
        `Example app listening on `+
        `host ${cmdLineOpts.values.host} port ${cmdLineOpts.values.port}!`
    )
});