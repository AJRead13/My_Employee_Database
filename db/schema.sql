DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    department_id INT,
    name VARCHAR(30),
    FOREIGN KEY (department_id),
    REFERENCES department(id),
    ON DELETE SET NULL,
    PRIMARY KEY(id)
)