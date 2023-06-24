import { Router } from "express";
import CabeceraController from "../controller/Cabecera_FacturaController";
import Vendedor_Controller from "../controller/VendedorController";

const routes = Router();
routes.get('',Vendedor_Controller.getAll);
routes.patch('',Vendedor_Controller.update)
routes.post('', Vendedor_Controller.add)
routes.delete('',Vendedor_Controller.getById)


export default routes;
