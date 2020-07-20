const Product = require("models/product.model"),
  helpers = require("util/helpers");

const { handle, handleErr } = helpers.handlers("Product", "products"),
  id = helpers.id;

/**
 * Get product by ID
 */
function get(req, res, next) {
  Product.findById(id(req))
    .exec()
    .then((user) => handle(req, res, user))
    .catch((err) => handleErr(next, err, "get(" + id(req) + ")"));
}

/**
 * Get products by name
 */
function getByName(req, res, next) {
  const keyword = req.params.name;
  Product.find({ name: { $regex: keyword, $options: "i" } })
    .limit(12)
    .then((products) => res.json(products))
    .catch((err) => handleErr(next, err, "getAll()"));
}

/**
 * Get products list
 */
function list(req, res, next) {
  const { limit = "12", skip = "0" } = req.query;
  Product.list({ limit, skip })
    .then((products) => res.json(products))
    .catch((err) => handleErr(next, err, "getAll()"));
}

module.exports = { get, getByName, list };
