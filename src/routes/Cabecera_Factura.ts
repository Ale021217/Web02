import { Router } from "express";
import CabeceraController from "../controller/Cabecera_FacturaController";

const routes = Router();
routes.get('',CabeceraController.getAll);
routes.patch('',CabeceraController.update)
routes.post('', CabeceraController.add)
routes.delete('/:id',CabeceraController.getById)
routes.post('/:id', CabeceraController.delete)


export default routes;
