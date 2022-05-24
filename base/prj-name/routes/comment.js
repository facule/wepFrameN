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
      res.redirect('/');
    } else {
      res.status(404).send('no user');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:id/delete', isLoggedIn, async (req, res, next) => {
  try {
    var id = req.params.id;
    if (id != null) {
      await Comment.destroy({
        where : {id : req.params.id},
      });
      res.redirect('/');
    } else {
      res.status(404).send('no comment');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/update', isLoggedIn, async (req, res, next) => {
  try {
    var id = req.body.id;
    var comment_content = req.body.comment_content;
    if (id != null && comment_content != null) {
      await Comment.update({
        content: req.body.comment_content
      },{  
        where : {id : req.body.id}
      });
      res.redirect('/');
    }
    else {
      res.status(404).send('no comment');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});


module.exports = router;