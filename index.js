const express = require("express");
const app = express();
const registrationController = require("./controllers/registrationController");
const secureAPI = require("./middlewares/secureAPI");
require("dotenv").config();
app.use(express.json());
app.get("/registration", secureAPI, registrationController);

app.listen(8000);
