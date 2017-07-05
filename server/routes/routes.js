const express = require('express'),
router = express.Router();


router.get('/', (req,res,next) => {
    res.render('/templates/index.html');

})

router.post('/api/user/signup',(req,res,next) => {
    let email = req.body.email,
    password= req.body.password,
    username = req.body.username,
    phoneNumber = req.body.phoneNumber,
    user = {email,password,username,phoneNumber};
    console.log(user)

    res.send(user)

});

router.post('/api/user/signin', (req,res,next) => {
    res.send('signin route')


});

router.post('/api/group', (req,res,next) => {
    res.send('create group route')

});

router.post('/api/group/:groupid/user', (req,res,next) => {
    res.send('add user route')

});

router.post('/api/group/:groupid/message', (req,res,next) => {

});

router.get('/api/group/:groupid/messages', (req,res,next) => {

});


router.use((err,req,res,next) => {
    console.log('unhandled error detected:' + err.message);
    res.send('500- server error')
})

router.use((req,res) => {
    res.send('404 - not found');
})

module.exports = router;