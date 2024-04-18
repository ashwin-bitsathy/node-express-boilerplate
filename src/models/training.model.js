const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

// {
//     "id" : 2,
//     "name" : "Avoid Getting Hacked",
//     "created_at" : "2024-04-17 02:03:16",
//     "updated_at" : "2024-04-17 02:03:16"
// },
const TrainingSchema = mongoose.Schema(
  {
    dealer_id: {
      type: Number,
      required: true,
      trim: true,
    },
    campaign_id: {
      type: Number,
      required: true,
      trim: true,
    },
    topic_id: {
      type: Number,
      required: true,
      trim: true,
    },
    training_date: {
      type: Date,
      required: true,
      trim: true,
    },
    visit: {
      type: String,
      trim: true,
      default: '#'
    },
    isDraft: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
TrainingSchema.plugin(toJSON);
TrainingSchema.plugin(paginate);


const Training = mongoose.model('Training', TrainingSchema);

module.exports = Training;
