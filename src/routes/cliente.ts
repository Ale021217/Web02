import { Router } from "express";

import ClienteController from "../controller/ClienteController";

const routes = Router();
routes.get('',ClienteController.getAll);
routes.patch('',ClienteController.update)
routes.post('', ClienteController.add)
routes.delete('',ClienteController.getById)


export default routes;
