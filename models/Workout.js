const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  day: {
    type: Date,
    exercises: [
      {
        type: {
          type: String,
          required: true,
        },
      },
      {
        name: {
          type: String,
          required: true,
        },
      },
      {
        duration: {
          type: Number,
          required: true,
        },
      },
      { weight: Number },
      { reps: Number },
      { sets: Number },
      { distance: Number },
    ],
  },
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
