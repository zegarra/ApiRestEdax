CREATE DATABASE IF NOT EXISTS edax;

USE edax;

CREATE TABLE usuario (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    correo VARCHAR(40) DEFAULT NULL,
    contrasena VARCHAR(200),
    PRIMARY KEY (id)
);

DESCRIBE usuario

Insert Into usuario VALUES  
    (1,'Alonso', 'alonsozegarra2690@gmail.com','hola123'),
    (2,'Jael', 'jael@gmail.com','123');