//express boilerplate
const express = require('express');
const app = express();
app.use(express.json());

//config
const PORT = 5000;

app.get('/healthCheck', (req, res) => {
    res.status(200).send('Healthy!');
});

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
});
