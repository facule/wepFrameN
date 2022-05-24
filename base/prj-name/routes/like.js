const express = require('express');

const { User, Post } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();



router.post('/:id/like', async (req, res, next) => {
    try {
    const user = await User.findOne({ where: { id: req.user.id } });
    await user.addLikedPost(parseInt(req.params.id, 10));
    res.send('success');
    }
    catch (error) {
      console.error(error);
      next(error);
    }
  });
  
  router.post('/:id/unlike', async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        await user.removeLikedPost(parseInt(req.params.postId, 10));
        res.send('success');
      }
      catch (error) {
        console.error(error);
        next(error);
      }
  
  });

  
module.exports = router;