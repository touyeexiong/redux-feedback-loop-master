const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');




router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('post initiated', newFeedback);

    let queryText = `
    INSERT INTO "feedback" (  
    "feeling",
    "understanding",
    "support",
    "comments")
    VALUES ($1, $2, $3, $4);
    `
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then (result => {
        res.sendStatus(201)
    })
    .catch((err) => {
        res.sendStatus(500)
        console.log(err);
        
    })
})

router.get(`/`, (req, res) => {
    // make query
    const queryText = 'SELECT * FROM "feedback";';
    // send query
    pool.query(queryText)
        .then(result => {
            console.log(result.rows);
            // send db response
            res.send(result.rows);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);

        })
});

module.exports = router;