const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    username: String,
    id: { type: Number, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
