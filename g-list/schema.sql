/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to execute the queries in this file.
 */

/*
  1. create a database

  2. create a table
    with column definitions

  3. insert 3 sample items
*/

DROP DATABASE IF EXISTS grocery_list;

CREATE DATABASE IF NOT EXISTS grocery_list;

USE grocery_list;

CREATE TABLE groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INT DEFAULT 1
);

INSERT INTO groceries (name, quantity) VALUES ("egg rolls", 100);
INSERT INTO groceries (name, quantity) VALUES ("gushers", 23);
INSERT INTO groceries (name, quantity) VALUES ("doughnuts", 500);
