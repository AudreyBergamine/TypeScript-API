
-- ****** EXECUTAR AS QUERY's PARA CRIAR O BANCO DE DADOS E AS TABELAS *****

CREATE DATABASE "db_JavaScript"

USE "db_JavaScript";

CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

INSERT INTO department(name) VALUES 
    ('Departamento de TI'),
    ('Departamento de Saúde'),
    ('Departamento de Meio Ambiente'),
    ('Departamento de Segurança'),
    ('Departamento de RH'),
    ('Departamento Financeiro'),
    ('Departamento de Logística');


-- usar o comando no terminal para visualizar Banco de Dados: yarn prisma studio
-- Video sobre criar o relacionamento: https://www.youtube.com/watch?v=NDWV5hHSPBk
