const express = require("express");

const router = express.Router();
const peliculaSchema = require("../models/modelo-peliculas");

//guarda las peliculas
router.post('/peliculas', (req, res) => {
    const peli = peliculaSchema(req.body);
    peli.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({messege: error}));
})

// devuelve las peliculas
router.get('/peliculas', (req, res) => {
    peliculaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({messege: error}));
    
})

// get a un solo usuario
router.get('/peliculas/:id', (req, res) => {
    const { id } = req.params;
    peliculaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({messege: error}));
    
})


// router.put('/peliculas/:id', (req, res) => {
//     const { id } = req.params;
//     const {datos }= req.body;

//     peliculaSchema
//         .updateOne({_id: id }, { $set:{ titulo, age, email} })
//         .then((data) => res.json(data))
//         .catch((error) => res.json({messege: error}));
    
// })

// borrar un usuario
router.delete('/peliculas/:id', (req, res) => {
    const { id } = req.params;

    peliculaSchema
        .deleteOne({_id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({messege: error}));
    
})




module.exports = router;