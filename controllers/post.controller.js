const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({ count: posts.length, posts });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.createNewPost = async (req, res, next) => {
  const { title, body } = req.body;

  const post = new Post(title, body);

  try {
    const resp = await post.save();

    res.status(201).json({ message: "Post created" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  let postId = req.params.id;

  try {
    let [post, _] = await Post.findById(postId);

    res.status(200).json({ post: post[0] });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
