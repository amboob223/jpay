CREATE DATABASE jpay;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR (255),
    bags VARCHAR(255),
    photo VARCHAR (255),
    address VARCHAR(255),
    origin VARCHAR(255),
    destination VARCHAR(255),
    payment VARCHAR(255)
);

CREATE TABLE travelers(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255),
    pickup VARCHAR(255),
    dropoff VARCHAR(255),
    phone VARCHAR(255),
    payment VARCHAR(255)
);

CREATE TABLE logins(
    id SERIAL PRIMARY KEY,
    username VARCHAR (255),
    password BYTEA
);