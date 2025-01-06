const express = require("express")
const app = express();

const port  = process.env.PORT || 4001

app.listen(port,() =>(
    console.log("the server is running in", port)
));