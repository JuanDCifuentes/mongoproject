const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    require: true
}
});

module.exports = mongoose.model("user", userSchema);
