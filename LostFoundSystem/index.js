const express = require ("express");
const mongoose = require ("mongoose");

const app = express()
// PORT = 3000

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Hello Everyone!")
    console.log("Actively Running")
})