const express = require("express");

const router = express.Router();
const userSchema = require("../models/model-user");


//create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({messege: error}));
})

// get a todos los usuarios
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({messege: error}));
    
})

// get a un solo usuario
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({messege: error}));
    
})

// actualizar un usuario
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {name, age, email} = req.body;

    userSchema
        .updateOne({_id: id }, { $set:{ name, age, email} })
        .then((data) => res.json(data))
        .catch((error) => res.json({messege: error}));
    
})

// borrar un usuario
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    userSchema
        .deleteOne({_id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({messege: error}));
    
})




module.exports = router;