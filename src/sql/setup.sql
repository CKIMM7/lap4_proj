CREATE TABLE History_Beginner (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE History_Intermediate (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE History_Expert (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE Pop_Beginner (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE Pop_Intermediate (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE Pop_Expert (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE Science_Beginner (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE Science_Intermediate (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);

CREATE TABLE Science_Expert (
    id serial PRIMARY KEY,
    name VARCHAR (4) REQUIRED,
    score int
);