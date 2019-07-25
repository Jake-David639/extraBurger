DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    item_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(45) NOT NULL,
    devoured VARCHAR(45) NOT NULL
);

SELECT * FROM burgers;