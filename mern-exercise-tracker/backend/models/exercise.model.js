const { Schema, Mongoose } = require("mongoose");

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Exercise = Mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
