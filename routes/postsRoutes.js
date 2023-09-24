const express = require("express");
const router = express.Router();
const Posts = require("../models/PostModel");

router.get("/", async (req, res) => {
    try {
        const posts = await Posts.find({});
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "could not get posts from db"
        });
    }
});
router.post("/add", async (req, res) => {
    try {
        const post = await Posts.create(req.body);
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "could not add post to db"
        });
    }
});

module.exports = router;