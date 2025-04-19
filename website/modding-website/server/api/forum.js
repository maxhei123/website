const express = require('express');
const router = express.Router();
const { getForumThreads, getForumPost, createForumPost } = require('../../utils/database');

// Get all forum threads
router.get('/threads', async (req, res) => {
    try {
        const threads = await getForumThreads();
        res.json(threads);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching threads' });
    }
});

// Get a specific forum post
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await getForumPost(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post' });
    }
});

// Create a new forum post
router.post('/posts', async (req, res) => {
    try {
        const newPost = await createForumPost(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
});

module.exports = router;