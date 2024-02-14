import * as TweetRepository from "../data/tweet.js";

export async function getTweets(req, res) {
  const username = req.query.username;
  const data = await (username
    ? TweetRepository.getAllByUsername(username)
    : TweetRepository.getAll());
  res.status(200).json(data);
}

export async function getTweet(req, res) {
  const id = req.params.id;
  const tweet = await TweetRepository.getAllById(id);
  console.log(tweet);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function createTweet(req, res) {
  const { text, name, username } = req.body;
  const tweet = await TweetRepository.create(text, name, username);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await TweetRepository.update(id, text);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function removeTweet(req, res) {
  const id = req.params.id;
  const tweet = await TweetRepository.remove(id);
  if (tweet) {
    res.status(200).json({ message: "the tweet has been deleted" });
  } else {
    res.status(404).json({ message: `Tweet id(${id}) is not found` });
  }
}
