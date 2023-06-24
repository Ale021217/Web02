import { Router } from "express";
import cliente from "./cliente";
import Cabecera_Factura from "./Cabecera_Factura";
import Detalle_Factura from "./Detalle_Factura";
import vendedor from "./vendedor";
import producto from "./Producto";
import proveedor from "./Proveedor";


const routes=Router();

routes.use('/Cliente',cliente)
routes.use('/Cabecera_Factura',Cabecera_Factura)
routes.use('/Detalle_Factura',Detalle_Factura)
routes.use('/Vendedor', vendedor)
routes.use('/Producto',producto)
routes.use('/Proveedor',proveedor)

export default routes;