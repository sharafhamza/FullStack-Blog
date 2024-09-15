function secureAPI(req, res, next) {
  let pass = req.headers.authorization;
  console.log();
  if (pass == process.env.SECURE_API) {
    next();
  } else {
    res.send({
      message: "Unauthorized access",
    });
  }
}

module.exports = secureAPI;
