const emailFieldValidation = require("../helpers/emailFieldValidation");
const textFieldValidation = require("../helpers/textFieldValidation");
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

async function registrationController(req, res) {
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
    }).save();
    res.send({ message: "Registration Successful" });
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Use the correct SMTP host
    port: 587,
    secure: false, // true for port 465, false for 587
    auth: {
      user: "kingsharaf14@gmail.com", // your Gmail address
      pass: "yhgtlftxsgyeabax", // your Gmail app password (ensure it's an app-specific password)
    },
  });

  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" <kingsharaf14@gmail.com>', // Corrected sender format
    to: email, // recipient's email address
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
}

module.exports = registrationController;
