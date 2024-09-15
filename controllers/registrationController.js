const emailFieldValidation = require("../helpers/emailFieldValidation");
const textFieldValidation = require("../helpers/textFieldValidation");

function registrationController(req, res) {
  const { name, email, password } = req.body;
  if (textFieldValidation(name, 4)) {
    res.send({ message: "Name is required" });
  }
  if (emailFieldValidation(email)) {
    res.send({ message: "Name is required" });
  }
  if (textFieldValidation(password, 8)) {
    res.send({ message: "Password must be 8 character" });
  }
}

module.exports = registrationController;
