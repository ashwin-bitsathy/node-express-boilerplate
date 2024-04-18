const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

// {
//     "id" : 2,
//     "name" : "Avoid Getting Hacked",
//     "created_at" : "2024-04-17 02:03:16",
//     "updated_at" : "2024-04-17 02:03:16"
// },
const CampaignsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
CampaignsSchema.plugin(toJSON);
CampaignsSchema.plugin(paginate);


const Campaigns = mongoose.model('Campaigns', CampaignsSchema);

module.exports = Campaigns;
