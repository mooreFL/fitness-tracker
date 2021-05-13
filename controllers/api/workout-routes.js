const router = require("express").Router();
const { Workout } = require("../../models");

//======post to create workout=========
router.post("/workouts", async (req, res) => {
  try {
    const workOutData = await Workout.create({});
    res.status(200).json(workOutData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//=========put workouts by id and push=========
router.put("/workouts/:id", async (req, res) => {
  try {
    const workOutData = await Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    );
    res.status(200).json(workOutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//=========get workouts and sum the duration=========
router.get("/workouts", async (req, res) => {
  try {
    const workOutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    res.status(200).json(workOutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//=========get workouts by range with descending sort and limit of 7=========
router.get("/workouts/range", async (req, res) => {
  try {
    const workOutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7);
    res.status(200).json(workOutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//=========delete workouts by id=========
router.delete("/workouts", async (req, res) => {
  try {
    await Workout.findByIdDelete(req.body);
    res.status(200).json(true);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
