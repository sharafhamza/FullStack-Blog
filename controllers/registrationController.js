const emailFieldValidation = require("../helpers/emailFieldValidation");
const textFieldValidation = require("../helpers/textFieldValidation");
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");

function registrationController(req, res) {
  const { name, email, password } = req.body;
  if (textFieldValidation(name, 5)) {
    return res.send({ message: "Name must 5 characters" });
  }
  if (emailFieldValidation(email)) {
    return res.send({ message: "Email must be requird" });
  }
  if (textFieldValidation(password, 8)) {
    return res.send({ message: "Password must 8 charcter longer" });
  }

  bcrypt.hash(password, 10, function (err, hash) {
    let userData = new userModel({
      name: name,
      email: email,
      password: hash,
    });
    userData.save();
    res.send({ message: "Registration Successful" });
  });
}

module.exports = registrationController;
