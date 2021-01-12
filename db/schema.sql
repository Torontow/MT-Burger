drop database if exists burgers_db;

create database burgers_db;

use database burgers_db;

create table burgers (
    id int not null auto_increment,
    burger_name varchar(40),
    devoured boolean
)

