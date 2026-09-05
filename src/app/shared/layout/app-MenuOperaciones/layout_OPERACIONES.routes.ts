import { Routes } from '@angular/router';
import { PROCESOS_ROUTES } from '../../../feactures/procesos/procesos.routes';
import { TIPOVEHICULOS_ROUTES } from '../../../feactures/tipoVehiculos/tipoVehiculos.routes';
import { VEHICULOS_ROUTES } from '../../../feactures/Vehiculos/vehiculos.routes';
import { CONDUCTORES_ROUTES } from '../../../feactures/conductores/conductores.routes';
import { TRANSPORTISTA_ROUTES } from '../../../feactures/transportista/transportista.routes';
import { INGRESOVEHICULOS_ROUTES } from '../../../feactures/IngresoVehiculos/ingresoVehiculos.routes';

export const OPERACIONES_ROUTES: Routes = [
  {
    path: 'Operaciones',
    children: [
      ...TIPOVEHICULOS_ROUTES,
      ...VEHICULOS_ROUTES,
      ...CONDUCTORES_ROUTES,
      ...TRANSPORTISTA_ROUTES,
      ...INGRESOVEHICULOS_ROUTES
    ]
  },
  {
    path: 'Produccion',
    children: [
      ...PROCESOS_ROUTES
    ]
  },
  {
    path: 'Almacen',
    children: [
      ...PROCESOS_ROUTES
    ]
  }
];