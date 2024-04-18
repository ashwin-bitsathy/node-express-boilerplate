const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

// {
//     "id" : 2,
//     "name" : "Avoid Getting Hacked",
//     "created_at" : "2024-04-17 02:03:16",
//     "updated_at" : "2024-04-17 02:03:16"
// },
const TrainingParticipantsSchema = mongoose.Schema(
  {
    dealer_id: {
      type: Number,
      required: true,
      trim: true,
    },
    training_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        trim: true,
    },
    participant_number: {
        type: Number,
        required: true,
        trim: true,
    },
    has_attended: {
        type: Boolean,
        required: true,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
TrainingParticipantsSchema.plugin(toJSON);
TrainingParticipantsSchema.plugin(paginate);


const TrainingParticipants = mongoose.model('TrainingParticipants', TrainingParticipantsSchema);

module.exports = TrainingParticipants;
