const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    code: {
      type: String,
      unique: true
    },
    description: {
      type: String,
    },
    owner: {
      type: String,
    },
    ownerEmail: {
      type: String,
      unique:true
      
    },
    
    createdBy: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("company", companySchema);
