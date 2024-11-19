const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Index
app.get('/posts', function (req, res) {
    console.log('Lista dei post');
});

// Show
app.get('/posts/:id', function (req, res) {
    console.log('post con id = ' + req.params.id);
});

// Store
app.post('/posts', function (req, res) {
    console.log('Nuovo post creato');
});

// Update
app.put('/posts/:id', function (req, res) {
    console.log('Post modificato');
});

// Modify
app.patch('/posts/:id', function (req, res) {
    console.log('Post modificato parzialmente');
});

// Destroy
app.delete('/posts/:id', function (req, res) {
    console.log('Post eliminato');
});

app.listen(port, function () {
    console.log('Server started...');
});
