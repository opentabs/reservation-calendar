/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./dbConnection.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser());
app.use(bodyParser({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/api/restaurants/:id/reservations', (req, res) => {
  db.query(`SELECT * FROM availability WHERE restaurant_id = ${req.params.restaurantId}`, (err, results, fields) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running at: http://localhost:${port}`);
});

// const getTimes = (req, res) => {
//  db.query(`SELECT * FROM availability WHERE restaurant_id = ${restaurantId}`, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       cb(null, results);
//     }
//   });
// };
 