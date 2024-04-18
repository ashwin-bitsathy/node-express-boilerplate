// {
//     "id" : 1,
//     "first_name" : "Ricardo",
//     "last_name" : "Faria",
//     "role" : "BDC Rep",
//     "dealership_id" : 22,
//     "profile_pic" : "",
//     "created_at" : "2024-04-17 02:08:04",
//     "updated_at" : "2024-04-17 02:08:04"
// },

const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const EmployeeSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    dealership_id: {
        type: Number,
        required: true,
        trim: true,
    },    
    profile_pic: {
        type: String,
        required: true,
        trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
EmployeeSchema.plugin(toJSON);
EmployeeSchema.plugin(paginate);


const Employees = mongoose.model('Employee', EmployeeSchema);

module.exports = Employees;
