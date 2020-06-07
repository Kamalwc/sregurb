const connection = require('./connection.js');

const selectAll = () => {
        connection.query("SELECT * FROM burgers", (err,results)=>{
            // if (err) return res.status(500).end();

            console.log(results);
        })
};

const insertOne = (param) => {
    connection.query(`INSERT INTO burgers (burger_name) VALUES(?)`, param, (err,results)=>{
        // if (err) return res.status(500).end();

        // res.json({ name: results.burger_name });
        console.log(results);
    })
};

const updateOne = (param) =>{
    connection.query(`UPDATE burgers SET eaten = true WHERE id = ?`,param, (err,results)=>{

        selectAll();
        console.log(results);
    })
};

// // selectAll();
// // insertOne('Truth burgear')
// updateOne(8)
module.exports = { 
    selectAll: selectAll,
    insertOne: insertOne , 
    updateOne: updateOne
 };
