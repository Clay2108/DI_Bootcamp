//creating a custom router

const express = require('express');
const router = express.Router();




router.get('/', async function(req, res){
  ctx= {
    title : 'Home Page',
  }

  res.render('product/home', ctx);
});

router.get('/about', async function(req, res){
  const ctx= {
    title : 'About Page',
  }

  res.render('product/about', ctx);
});

module.exports=router;
