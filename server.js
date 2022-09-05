const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require("./app");

let database_string = process.env.DATABASE_STRING;
let username = process.env.DATABASE_USERNAME;
let password = process.env.DATABASE_PASSWORD;

database_string = database_string
  .replace("<username>", username)
  .replace("<password>", password);

mongoose
  .connect(database_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((connection) => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Some problem occured while connecting to the database");
  });

app.listen(8000, "127.0.0.1", function () {
  console.log("[ Server Started]");
});
