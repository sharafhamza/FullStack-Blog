function textFieldValidation(text, length) {
  if (text.length < length) {
    return true;
  } else {
    return false;
  }
}

module.exports = textFieldValidation;
