const express = require('express');
const router = express.Router();
import posts from '../immagini_e_post/posts';

router.get('/',(req,res) => {
    res.json.send(posts);
})

router.get('/:id',(req,res) => {
    res.json.send(posts.find(x => x.id = req.params.id))
})

router.post('/:id',(req,res) => {
    const index = posts.findIndex(p => p.id === req.params.id)
    if(index !== -1){
        posts.splice(index,1);
        res.send(`pizza con id ${req.params.id} eliminata`)
    }else{
        res.send(`pizza con id ${req.params.id} non eliminta`)
    }
})

module.exports = router;