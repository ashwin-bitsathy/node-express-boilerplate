// {
//     "id" : 1669,
//     "name" : "MB Instrument Cluster Training",
//     "campaign_id" : 275,
//     "created_at" : "2024-04-17 03:54:31",
//     "updated_at" : "2024-04-17 03:54:31"
// }

const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const TopicSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    campaign_id: {
        type: Number,
        required: true,
        trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
TopicSchema.plugin(toJSON);
TopicSchema.plugin(paginate);


const Topics = mongoose.model('Topics', TopicSchema);

module.exports = Topics;
