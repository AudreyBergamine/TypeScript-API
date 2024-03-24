
-- ====>>>>> Executar Query para criar a tabela de departamentos

CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- ====>>>>> Executar Query para criar os departamentos

INSERT INTO department(name) VALUES 
    ('Departamento de TI'),
    ('Departamento de Saúde'),
    ('Departamento de Meio Ambiente'),
    ('Departamento de Segurança'),
    ('Departamento de RH'),
    ('Departamento Financeiro'),
    ('Departamento de Logística'
);

-- usar o comando no terminal para visualizar os departamentos: yarn prisma studio
-- Video sobre criar o relacionamento: https://www.youtube.com/watch?v=NDWV5hHSPBk



