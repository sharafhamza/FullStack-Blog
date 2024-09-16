require("dotenv").config();
const express = require("express");
const secureApi = require("./middlewares/secure_api");
const registrationController = require("./controllers/RegistrationController");
const app = express();
MongoDbconfig();
const MongoDbconfig = require("./DB/MongoDbconfig");
app.use(express.json());
app.post("/registration", secureApi, registrationController);

app.listen(3000);
