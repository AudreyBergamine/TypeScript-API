import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface DepartmentCreateData {name: string; }

export default class DepartmentsController{


    public async create(req: Request, res: Response): Promise<Response> {
        const { name } = req.body as DepartmentCreateData;

        console.log(req.body);
        console.log(name);
    
        if (!name) {
            return res.status(400).json({ error: "Nome do departamento é obrigatório" });
        }
    
        try {
            const obj = await prisma.department.create({ data: { name } });
            return res.json(obj);
            console.log("Departamento criado com sucesso");
        } catch (error) {
            console.error("Erro ao criar departamento:", error);
            return res.status(500).json({ error: "Erro ao criar departamento" });
        }
    }
    
    

    public async list(req: Request, res: Response):Promise<Response>{
        const departments = await prisma.department.findMany({});
        return res.json(departments);
    }

    public async listDepartmentByName(req: Request, res: Response):Promise<Response>{
        const departments = await prisma.department.findMany({
            select: {
                name: true,
            },
        });

        if(!departments){
            return res.json([]);
        }

        const name = departments.map((department: {name: string;}) => department.name);
        return res.json(name);
    }





}


