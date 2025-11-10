const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if(!req.user) res.redirect('no-permission');
  const userData = {
    userName: req.user.displayName,
    photo: req.user.photos
  }
  return res.render('logged', {user: userData});
});

router.get('/no-permission', (req, res) => {
  return res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if(!req.user) res.redirect('no-permission');
  return res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  if(!req.user) res.redirect('no-permission');
  return res.render('settings');
}); 

module.exports = router;