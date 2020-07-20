const mongoose = require("mongoose");

/**
 * Product schema
 */
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  price: {
    type: Number,
  },
  currency: {
    type: String,
  },
  description: {
    type: String,
  },
});

/**
 * Statics
 */
schema.statics = {
  /**
   * List products in ascending order of 'name'
   */
  list({ skip = "0", limit = "0" } = {}) {
    return this.find()
      .sort({ name: 1 })
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .exec();
  },
};

module.exports = mongoose.model("Products", schema, "Products");
