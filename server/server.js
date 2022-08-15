const express = require('express');

const app = express();
const PORT = 5001; // process.env.PORT || is for Heroku

// This is how our index.html appears
app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});