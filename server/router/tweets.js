import express from "express";
import "express-async-errors";
import * as TweetController from "../controller/tweetsController.js";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";

const router = express.Router();
const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 2 })
    .withMessage("please check your name"),
  validate,
];

// GET /tweets
// GET /tweets?username=:username
router.get("/", TweetController.getTweets);

// GET /tweets/:id
router.get("/:id", TweetController.getTweet);

// POST /tweets
router.post("/", validateTweet, TweetController.createTweet);

// PUT /tweets/:id
router.put("/:id", validateTweet, TweetController.updateTweet);

// DELETE /tweets/:id
router.delete("/:id", TweetController.removeTweet);

export default router;
