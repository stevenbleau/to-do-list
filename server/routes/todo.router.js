const { response, Router } = require('express');
const express = require('express');
const { Pool } = require('pg');
const pool = require('../modules/pool.js');
const router = express.Router();

//POST
    router.post('/', (req, res)=>{
        const input = req.body;
        const queryText =  `INSERT INTO "to_do_list"
                            ("task")
                            VALUES ($1)`
        pool.query(queryText, [input.task])
            .then((result)=>{
                console.log(result);
                res.send(result);
            }).catch((error)=>{
                console.log("error in todo post", error);
                res.sendStatus(500);
            })
    })

//GET
    router.get('/', (req,res)=>{
        console.log('in GET /todo');
        const queryText = `SELECT * FROM "to_do_list";`;
        pool.query(queryText).then((result)=>{
            console.log('SELECT SUCCESS!', result);
            res.send(result.rows);
        }).catch((error)=>{
            console.log('error in /todo GET ', error);
            res.sendStatus(500);
        })
    });

// PUT
router.put('/:id', (req,res)=>{
    console.log('task complete');
    const taskId = req.params.id;
    const queryText = `UPDATE "to_do_list" SET "status" = 'complete' WHERE "id" = $1;`
    pool.query(queryText, [taskId])
        .then((results)=>{
            res.sendStatus(200);
        }).catch((error)=>{
            res.sendStatus(500);
        })
})

// DELETE
router.delete('/:id', (req,res)=>{
    const taskId = req.params.id;
    console.log('DELETE /task', taskId);
    const queryText = 'DELETE FROM "to_do_list" WHERE "id"= $1';
    pool.query(queryText, [taskId])
    .then((results)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        res.sendStatus(500);
    })
})

module.exports = router;