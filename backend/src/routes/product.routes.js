const express = require("express"),
  router = express.Router(),
  productCtrl = require("controllers/product.controller");

router.route("/").get(productCtrl.list);

router.route("/:id").get(productCtrl.get);

router.route("/:name").post(productCtrl.getByName);

module.exports = router;
