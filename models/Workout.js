const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workOutSchema = new Schema ({
    day: {
         type: Date,
        exercises: [
            {type: string},
            {name: string},
            {duration: number},
            {weight: number},
            {reps: number},
            {sets: number},
            {distance: number
            }
        ]
    }
});

const Workout = mongoose.model('Workout', workOutSchema)
