const express = require('express');
const cors = require('cors');
const { REACT_APP_SERVER_PORT } = require('./env');

const app = express();

app.use(cors());

app.get('/points', (request, response) => {
    response.json({
        userPoints: 50,
    });
});

app.listen(REACT_APP_SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${REACT_APP_SERVER_PORT}`);
});