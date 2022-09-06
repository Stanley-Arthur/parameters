exports.getPosts = (req,res)=>{
     res.status(200).send(`Get All Posts filtered by "${req.query.title}"`);
}
exports.getPost = (req,res)=>{
    res.status(200).send("get each post")
}
exports.createPost = (req,res)=>{
    res.status(201).send("update a post")
}
exports.updatePost = (req,res)=>{
    res.status(200).send(`Post with ID ${req.params.postId} has been updated`);
}
exports.deletePost = (req,res)=>{
    res.status(200).send("delete a post")
}

