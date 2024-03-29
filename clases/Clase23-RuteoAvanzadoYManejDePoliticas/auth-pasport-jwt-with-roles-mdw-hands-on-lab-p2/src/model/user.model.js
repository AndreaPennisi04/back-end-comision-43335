const mongoose = require("mongoose");

const collection = "Usuarios";

const roleType = {
  USER: "USER",
  ADMIN: "ADMIN",
  PUBLIC: "PUBLIC",
  BRONCE: "BRONCE",
  SILVER: "SILVER",
};

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
  role: {
    type: String,
    enum: Object.values(roleType),
  },
  notes: {
    type: [
      {
        note: {
          type: mongoose.schema.types.ObjectId,
          ref: "notas",
        },
      },
    ],
  },
});

const userModel = mongoose.model(collection, schema);
module.exports = userModel;
