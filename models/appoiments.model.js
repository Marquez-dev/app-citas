const mongoose = require("mongoose");

const appoimentSchema = new mongoose.Schema(
  {
    client: {
      type: String,
    },
    week: {
      type: String,
    },
    day: {
      type: String,
    },
    time: {
      type: String,
    },
    process: {
      type: String,
    },
    provider: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('appoiments',appoimentSchema)
