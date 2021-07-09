DROP DATABASE IF EXISTS clientManager;
CREATE DATABASE IF NOT EXISTS clientManager;

USE clientManager;

  CREATE TABLE IF NOT EXISTS clients (
      client_id INT NOT NULL AUTO_INCREMENT,
      firstName VARCHAR(20),
      lastName VARCHAR(20),
      streetAddress VARCHAR(50),
      city VARCHAR(25),
      state VARCHAR(2),
      zipCode VARCHAR(5),
      phone VARCHAR(10),
      email VARCHAR(320),
      PRIMARY KEY (client_id)
  );

  CREATE TABLE IF NOT EXISTS jobs (
    id INT NOT NULL AUTO_INCREMENT,
    client_id INT NOT NULL,
    date DATETIME,
    PRIMARY KEY (id, client_id)
  );

  ALTER TABLE clients ADD INDEX (firstName, lastName);