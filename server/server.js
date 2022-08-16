const express = require('express');

const app = express();
const PORT = 5001; // process.env.PORT || is for Heroku

// This is how our index.html appears
app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));


//ROUTES
const todoRouter = require('./routes/todo.router.js');
app.use('/todo', todoRouter);


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});