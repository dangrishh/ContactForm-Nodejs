const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(express.static('public'));
app.use(express.json())

app.get('/nn', (req, res) => { 
    res.sendFile(__dirname + '/public/contactform.html');
})

app.get('/thankyou', (req, res) => { 
    res.render("thankyou");
})

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
