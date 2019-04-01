/* eslint-disable no-console */
const faker = require('faker');
const db = require('./dbConnection.js');

// generate data
for (let i = 1; i < 100; i += 1) {
  const date = faker.date.between('2019-03-01', '2019-5-01');
  const time = `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 4) * 15}`;
  const restaurantId = i;

  // insert data in database
  // eslint-disable-next-line camelcase
  const options = [date, time, restaurantId];
  const sql = 'INSERT INTO availabilities (date, times, restaurant_id) VALUES (?, ?, ?);';
  db.query(sql, options, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}
// generate open and closing times
db.end();
