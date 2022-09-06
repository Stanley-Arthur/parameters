const router = require("express").Router;

const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
}= require("../controllers/posts.controller")

const postRouter= router();

postRouter.route("/").post(createPost).get(getPosts)
postRouter.route("/:postId").patch(updatePost).get(getPost).delete(deletePost)

module.exports= postRouter;