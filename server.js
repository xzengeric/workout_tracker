const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds157621.mlab.com:57621/heroku_rt1m5b8q", { useNewUrlParser: true });

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});