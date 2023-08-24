const router = require("express").Router();
const postController = require("../controllers/post.controller");

// @route GET && POST - /posts/
router.route("/").get(postController.getAllPosts).post(postController.createNewPost);
router.route("/:id").get(postController.getPostById);
module.exports = router;
