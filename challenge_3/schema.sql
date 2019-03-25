DROP DATABASE IF EXISTS checkout_list;
CREATE DATABASE IF NOT EXISTS checkout_list;

USE checkout_list;

CREATE TABLE checkout (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address1 VARCHAR(255) DEFAULT "test address1",
  address2 VARCHAR(255) DEFAULT "test address2",
  city VARCHAR(50) DEFAULT "Seattle",
  state VARCHAR(50) DEFAULT "WA",
  zip INT DEFAULT 11111,
  phone INT DEFAULT 2061111111,
  card_number INT DEFAULT 101121345,
  expire_date VARCHAR(4) DEFAULT "0212",
  cvv INT DEFAULT 119,
  billing_zip INT DEFAULT 9105
);