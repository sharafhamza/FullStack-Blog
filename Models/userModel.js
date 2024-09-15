const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: [8, "Must be at least 6, got {VALUE}"],
    max: 12,
  },
});

module.exports = mongoose.model("User", userSchema);
