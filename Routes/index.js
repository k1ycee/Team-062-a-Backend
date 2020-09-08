const express = require("express");
const router = express.Router();
const docs = require("./Docs/doc");
const userRoutes = require("./userRoutes");
const productroutes = require("./productRoutes")
const { use } = require("./Docs/doc");

router.use(docs);
router.use(userRoutes);
router.use(productroutes);
module.exports = router;
