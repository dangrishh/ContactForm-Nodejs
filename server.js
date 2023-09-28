const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/public/contactform.html');
})

app.post('/thankyou', (req, res) => {
    console.log(req.body);
    // Simulate a successful submission
    const response = 'Success';
    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
