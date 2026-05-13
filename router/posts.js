const express = require('express');
const router = express.Router();
const posts = require('../immagini_e_post/posts');

router.get('/',(req,res) => {
    res.json(posts);
})

router.get('/:id',(req,res) => {
    res.json(posts.find(x => x.id === Number(req.params.id)))
})

router.delete('/:id',(req,res) => {
    const index = posts.findIndex(p => p.id === Number(req.params.id))
    if(index !== -1){
        res.send(`post con id ${req.params.id} eliminata`)
    }else{
        res.send(`post con id ${req.params.id} non eliminta`)
    }
})

module.exports = router;