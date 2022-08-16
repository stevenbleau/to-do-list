const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


// GET
// router.get('/', (req, res) => {
//     console.log('in GET /koalas');
//     const queryText = 'SELECT * FROM "koalas";';
//     pool.query(queryText).then((result) => {
//         console.log('SELECT SUCCESS!', result);
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('error in koala GET', error);
//         res.sendStatus(500);
//     });
// } );

// POST
// router.post('/', (req, res) =>{
//     const koala = req.body;
//     const queryText=` INSERT INTO "koalas" 
//     ("name", "age", "gender", "ready_to_transfer", "notes")
//     VALUES ($1, $2, $3, $4, $5); `
// pool.query(queryText, [koala.name, koala.age, koala.gender, koala.readyForTransfer, koala.notes])
//     .then((result) => {
//     console.log(result);
//     res.send(result) 
// }).catch((error)=>{
//     console.log("error in koala post", error );
//     res.sendStatus(500);
// })
// });


// PUT


// DELETE

module.exports = router;