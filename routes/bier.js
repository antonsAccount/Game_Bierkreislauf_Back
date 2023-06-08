const express = require("express");

const {
    createBeer,
    getAllBeers,
    updateOneBeer,
    getSingleBeer,
} = require("../controllers/bier")

const router = express.Router();
router.route("/").get(getAllBeers).post(createBeer)
router.route("/:name").put(updateOneBeer);
router.route("/answer").get(getSingleBeer)




module.exports = router