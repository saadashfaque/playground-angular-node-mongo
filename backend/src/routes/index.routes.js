const express = require("express"),
  router = express.Router();

router.use("/products", require("routes/product.routes"));

module.exports = router;
