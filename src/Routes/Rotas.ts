import { Router } from "express";
import DepartmentsController from "../Controller/DepartmentsController";

const departmentsRouter = Router()
const departmentsController = new DepartmentsController();

departmentsRouter.get('/', departmentsController.list)
departmentsRouter.get('/names', departmentsController.listDepartmentByName)

departmentsRouter.post('/', departmentsController.create)

export default departmentsRouter;