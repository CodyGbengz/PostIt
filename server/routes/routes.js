import express from 'express';
import controllers from '../controllers/index';

const router = express.Router();


router.get('/', (req, res) => {
  res.send('welcome to my app');
});

// routes to create users and sign in user 
router.post('/api/user/signup', controllers.User.create);
router.post('/api/user/signin', controllers.User.authenticate);
router.get('/api/user', controllers.User.list);

// authentication middleware goes here

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.send('Please signin');
  }
});

// route to create groups
router.post('/api/group', controllers.Group.create);

// route to add user to group
router.post('/api/group/:groupid/user', );

// route to get all groups
router.get('/api/group', controllers.Group.list);

// route to post message to particular group
router.post('/api/group/:groupid/message', controllers.Message.create);

// route to view message from particular group
router.get('/api/group/:groupid/messages',);

router.get('/signout', (req, res) => {
  req.session.destroy();
  res.send('user signed out successfully');
});


router.use((err, req, res, next) => {
  /* eslint-disable no-console*/
  console.log(`unhandled error detected: ${err.message}`);
  res.send('500- server error');
  next();
});

router.use((req, res) => {
  res.send('404 - not found');
});

module.exports = router;
