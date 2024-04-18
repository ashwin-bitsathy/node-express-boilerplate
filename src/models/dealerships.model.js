const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

// "id" : 1,
// "name" : "RockED Commercial Team",
// "created_at" : "2024-04-17 02:01:59",
// "updated_at" : "2024-04-17 02:01:59"
// },
const DealershipSchema = mongoose.Schema(
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
DealershipSchema.plugin(toJSON);
DealershipSchema.plugin(paginate);


const Dealerships = mongoose.model('Dealerships', DealershipSchema);

module.exports = Dealerships;
