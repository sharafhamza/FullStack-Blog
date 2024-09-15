function emailFieldValidation(email) {
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let text = pattern.test(email);

  if (!text) {
    return true;
  } else {
    return false;
  }
}

module.exports = emailFieldValidation;
