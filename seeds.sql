DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
	id INT(11) AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50),
	price DECIMAL(10, 2),
	stock_quantity INT(11),
	PRIMARY KEY (id)
);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("Fidget Spinner", "Toys", 5.00, 100);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("Fidget Widget", "Toys", 5.00, 100);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("3D Printer", "Electronics", 200.00, 50);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("Tape", "Office Supplies", 2.00, 100);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("Scissors", "Office Supplies", 15.00, 100);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 500.00, 75);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 300.00, 50);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("Laptop Cooler", "Electronics", 15.00, 100);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("PLA Filament", "Electronics", 20.00, 50);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("Mouse Pad", "Office Supplies", 10.00, 100);

