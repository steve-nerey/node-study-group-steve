// Code done as a group.

const express = require('express');
const Datastore = require('nedb');
const database = new Datastore('dogs.db');
database.loadDatabase();

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

app.get('/api', (req, res) => {
    database.find({}, (err, data) => {
        if (err) {
            res.end();
            return;
        }
        res.json(data);
    });
});

app.post('/api', (req, res) => {
    const data = req.body;
    database.insert(data);
    // res.json(data);
    res.json({
        status: "success"
    });
});

