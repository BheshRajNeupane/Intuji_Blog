const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')


router
.route('/getAllBlog')
.get(blogController.getAllBlog);

router
.route('/creatBlog')
.post(blogController.creatBlog)

router
.route('/updateBlog/:id')
.patch(blogController.updateBlog)

router
.route('/deleteBlog/:id')
.delete(blogController.deleteBlog)


module.exports = router;