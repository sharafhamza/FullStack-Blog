const secureApi = (req, res, next) => {
  const pass = req.headers.verify;

  if (pass == process.env.SECURE_API) {
    next();
  } else {
    res.send({ message: "Access unauthorized" });
  }
};

module.exports = secureApi;
