const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        title: String,
        notes: String,
        location: String,
        email: String,
        base64: String,
    }
);

const Post = mongoose.model("Posts", postSchema);
module.exports = Post;