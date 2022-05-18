const express = require('express');

const { isLoggedIn } = require('./middlewares');
const Comment = require('../models/comment');

const router = express.Router();

router.post('/create', isLoggedIn, async (req, res, next) => {
  try {
    const content = req.body.content
    if (content) {
      await Comment.create({
        content : req.body.content,
        UserId :  req.body.currentUserId,
        PostId : req.body.postId
      });
      res.send('success');
    } else {
      res.status(404).send('no user');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
