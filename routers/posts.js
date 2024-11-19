const express = require('express');
const router = express.Router();

// Index
router.get('/', function (req, res) {
    console.log('Lista dei post');
});

// Show
router.get('/:id', function (req, res) {
    console.log('post con id = ' + req.params.id);
});

// Store
router.post('/', function (req, res) {
    console.log('Nuovo post creato');
});

// Update
router.put('/:id', function (req, res) {
    console.log('Post modificato');
});

// Modify
router.patch('/:id', function (req, res) {
    console.log('Post modificato parzialmente');
});

// Destroy
router.delete('/:id', function (req, res) {
    console.log('Post eliminato');
});

module.exports = router;
