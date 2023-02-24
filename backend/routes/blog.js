const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog')
const fetchuser = require('../middleware/fetchuser')

router.get('/getallblogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        if (blogs.length == 0) {
            return res.status(404).json({ error: "No blogs found" })
        }
        res.json(blogs)
        
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
    
})
router.post('/addblog', fetchuser, [
],
async (req, res) => {
    try {
        const { title, description, tag, ImageUrl, content, author } = req.body;
            const blog = new Blog({
                title, description, tag, ImageUrl, content, author
            });
            
            const saveblog = await blog.save();
            res.json(saveblog);
            // console.log(blog.id)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some Error occurred");
        }

    })

router.get('/myblog/:id', async (req, res) => {
    try {
        const myblog = await Blog.findById(req.params.id)
        res.send(myblog)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }


})


module.exports = router; 