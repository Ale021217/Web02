import { Router } from "express";
import CabeceraController from "../controller/Cabecera_FacturaController";
import Proveedor_Controller from "../controller/ProveedorController";

const routes = Router();
routes.get('',Proveedor_Controller.getAll);
routes.patch('',Proveedor_Controller.update)
routes.post('', Proveedor_Controller.add)
routes.delete('',Proveedor_Controller.getById)


export default routes;
