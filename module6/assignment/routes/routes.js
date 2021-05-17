const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('home');
});


router.get('/users', (req, res, next) => {
    res.render('users', {users});
});

router.post('/user', (req, res, next) => {
    users.push(req.body.user);
    console.log(users)
    res.redirect('/')
});

module.exports = router;