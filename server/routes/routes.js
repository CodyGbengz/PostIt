import express from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import controllers from '../controllers/index';

const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile('C:/Users/Mart/Desktop/PostIt/templates/index.html');
});

// routes to create users and sign in user 
router.post('/api/user/signup', controllers.User.create);
router.post('/api/user/signin', controllers.User.auth);

// authentication middleware goes here
router.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: 'auth failed'
        });
        return;
      }
      // save token for use in subsequent routes
      req.decoded = decoded;
      next();
    });
  }
});

// route to create groups
router.post('/api/group', );

// route to add user to group
router.post('/api/group/:groupid/user',);

// route to post message to particular group
router.post('/api/group/:groupid/message',);

// route to view message from particular group
router.get('/api/group/:groupid/messages', );


router.use((err, req, res, next) => {
  /* eslint-disable no-console*/
  console.log(`unhandled error detected:${err.message}`);
  res.send('500- server error');
  next();
});

router.use((req, res) => {
  res.send('404 - not found');
});

module.exports = router;
