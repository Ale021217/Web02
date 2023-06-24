import { Router } from "express";
import CabeceraController from "../controller/Cabecera_FacturaController";
import Detalle_FacturaController from "../controller/Detalle_FacturaController";

const routes = Router();
routes.get('',Detalle_FacturaController.getAll);
routes.patch('',Detalle_FacturaController.update)
routes.post('', Detalle_FacturaController.add)
routes.delete('',Detalle_FacturaController.getById)


export default routes;
