const router = require("express").Router();

const postController = require("../controllers/posts.controller");

router.post("/add-post", postController.addPost);
router.get("/all-posts", postController.getAllPosts);
router.get("/published", postController.getPublishedPosts);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
