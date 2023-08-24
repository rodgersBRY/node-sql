const db = require("../models");

// create our main model
const Post = db.posts;
const Review = db.reviews;

// main logic

// 1. create post
const addPost = async (req, res) => {
  const { title, price, description, published } = req.body;

  let info = {
    title: title,
    price: price,
    description: description,
    published: published ?? false,
  };

  const post = await Post.create(info);

  console.log(post);
  return res.status(201).json({ post });
};

// 2. get all posts
const getAllPosts = async (req, res) => {
  let posts = await Post.findAll();
  //   let posts = await Post.findAll({ attributes: ["title, 'price"] });

  return res.status(200).send(posts);
};

// 3. get single post
const getPostById = async (req, res) => {
  let id = req.params.id;

  let post = await Post.findOne({ where: { id: id } });
  if (!post) return res.status(404).json({ message: "does not exist" });
  return res.status(200).send(post);
};

// 4. get single post
const updatePost = async (req, res) => {
  let id = req.params.id;
  const post = await Post.update(req.body, { where: { id: id } });

  res.status(201).send(post);
};

// 5. delete post by id
const deletePost = async (req, res) => {
  let id = req.params.id;
  await Post.destroy({ where: { id: id } });

  res.status(201).json({ message: "deleted post!" });
};

// get published posts
const getPublishedPosts = async (req, res) => {
  const posts = await Post.findAll({ where: { published: true } });

  res.status(201).json({ posts });
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
  getPublishedPosts,
};
