import { Router } from "express";
import CabeceraController from "../controller/Cabecera_FacturaController";
import Producto_Controller from "../controller/ProductoController";

const routes = Router();
routes.get('',Producto_Controller.getAll);
routes.patch('',Producto_Controller.update)
routes.post('', Producto_Controller.add)
routes.delete('',Producto_Controller.getById)


export default routes;
