const Jobontroller = require('../controllers/Job.controller');
var router = require('express').Router();




router.post('/', Jobontroller.createOneJob);
router.post('/many', Jobontroller.createManyJob);
router.post('/byids', Jobontroller.getManyJob);
router.post('/filter', Jobontroller.findByFilterJob);
router.delete('/:id', Jobontroller.deleteJob);
router.patch('/:id', Jobontroller.updateOneJob);
router.get('/one/:id', Jobontroller.findOneJob);
router.get('/all', Jobontroller.findAllJob);


router.post('/applied',Jobontroller.appliedOffert)
module.exports = router

