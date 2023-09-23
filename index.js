const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const PORT = 8000;

// db connect and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
})
.catch(error => console.log(`mongodb error: ${error}`));