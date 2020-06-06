const connection = require('./connection.js');

function selectAll() {
        connection.query("SELECT * FROM burgers", (err,results)=>{
            // if (err) return res.status(500).end();

            console.log(results);
        })
};

function insertOne(param) {
    connection.query(`INSERT INTO burgers (burger_name) VALUES(?)`, param, (err,results)=>{
        // if (err) return res.status(500).end();

        // res.json({ name: results.burger_name });
        console.log(results);
    })
};

function updateOne(param) {
    connection.query(`UPDATE burgers SET eaten=true WHERE burger_id=?`,param, (err,results)=>{
        // if (err) return res.status(500).end();

        console.log(results);
    })
};

selectAll();
// insertOne('bueno burgah')
updateOne(3)
module.exports = { selectAll , insertOne , updateOne };