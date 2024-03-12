const BlogController = require('../controllers/Blog.controller');
var router = require('express').Router();




router.post('/category', BlogController.createOneCategory);
router.post('/category/filter', BlogController.findByFilterCategory);
router.delete('/category/:id', BlogController.deleteCategory);
router.patch('/category/:id', BlogController.updateOneCategory);
router.get('/category/one/:id', BlogController.findOneCategory);
router.get('/category/all', BlogController.findAllCategory);


router.post('/article', BlogController.createOneArticle);
router.post('/article/filter', BlogController.findByFilterArticle);
router.delete('/article/:id', BlogController.deleteArticle);
router.patch('/article/:id', BlogController.updateOneArticle);
router.get('/article/one/:id', BlogController.findOneArticle);
router.get('/article/all', BlogController.findAllArticle);
module.exports = router

