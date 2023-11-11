const router = require("express").Router();
const { Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req,res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            // uses id from session for security 
            user_id: req.session.user_id
        });
        res.json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;

// This file has been modified
// const obj={
//     name:"Slava",
//     iscoding:true
// }
// const newObj = {
//     ...obj
//     somehting: "something"
// }