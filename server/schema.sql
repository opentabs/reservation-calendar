DROP DATABASE IF EXISTS reservations;

CREATE DATABASE reservations;

USE reservations;

/* -------------------------------------------------------*/
/*                      Create table                      */
/* -------------------------------------------------------*/
CREATE TABLE availabilities (
	id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL,
  times TIME NOT NULL,
  restaurant_id INTEGER NOT NULL
);
