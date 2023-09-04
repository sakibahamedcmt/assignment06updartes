const express = require('express');
const router = express.Router();

const {create,read, delete: remove,  update,} = require('../Controllers/blogController');

router.get('/blog/create', create);
router.get('/blog/read', read);
router.get('/blog/delete', remove);
router.get('/blog/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/blogDetilsController');

router.get('/blogdetails/create', create);
router.get('/blogdetails/read', read);
router.get('/blogdetails/delete', remove);
router.get('/blogdetails/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/commentController');

router.get('/comment/create', create);
router.get('/comment/read', read);
router.get('/comment/delete', remove);
router.get('/comment/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/messageController');

router.get('/message/create', create);
router.get('/message/read', read);
router.get('/message/delete', remove);
router.get('/message/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/portfolioController');

router.get('/portfolio/create', create);
router.get('/portfolio/read', read);
router.get('/portfolio/delete', remove);
router.get('/portfolio/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/productController');

router.get('/product/create', create);
router.get('/product/read', read);
router.get('/product/delete', remove);
router.get('/product/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/profitController');

router.get('/profit/create', create);
router.get('/profit/read', read);
router.get('/profit/delete', remove);
router.get('/profit/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/projectController');

router.get('/project/create', create);
router.get('/project/read', read);
router.get('/project/delete', remove);
router.get('/project/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/serviceController');

router.get('/service/create', create);
router.get('/service/read', read);
router.get('/service/delete', remove);
router.get('/service/update', update);

const {create,read, delete: remove,  update,} = require('../Controllers/titleController');

router.get('/title/create', create);
router.get('/title/read', read);
router.get('/title/delete', remove);
router.get('/title/update', update);

module.exports = router;
