const express = require("express");
const router = express.Router();

const tweet_controller = require("../controller/tweetsController.js");

// Twitter Routes
router.get("/tweetor/create", tweet_controller.Tweetor_create_get);
router.post("/tweetor/create", tweet_controller.Tweetor_create_post);

router.get("/tweetor/:id/update", tweetor_controller.tweetor_update_get);
router.post("/tweetor/:id/update", tweetor_controller.tweetor_update_post);

router.get("/tweetor/:id/delete", tweetor_controller.tweetor_delete_get);
router.post("/tweetor/:id/delete", tweetor_controller.tweetor_delete_post);

router.get("/tweetor/:id", tweetor_controller.tweetor_detail);
router.get("/tweetors", tweetor_controller.tweetor_list);
