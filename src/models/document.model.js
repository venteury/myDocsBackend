const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Untitled Document",
    },
    data: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Document", documentSchema);
