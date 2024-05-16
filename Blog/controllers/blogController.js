const Blog = require('../Models/blogModel');
const codeFactory = require('../controllers/codeFactory')

//to show all showing Blog
exports. getAllBlog = codeFactory.getAll(Blog)

//to create Particular Blog
exports.creatBlog =  codeFactory.createOne(Blog)

//  to update particular Blog
exports. updateBlog =  codeFactory.updateOne(Blog);
     

//  to delete particular Blog
exports.deleteBlog = codeFactory.deleteOne(Blog)
