import { Routes } from '@angular/router';
import { EMPLEADOS_ROUTES } from '../../../feactures/empleado/empleado.routes';
import { USUARIOS_ROUTES } from '../../../feactures/usuarios/usuario.routes';
import { ROLES_ROUTES } from '../../../feactures/roles/roles.routes';
import { TIPODOCUMENTOS_ROUTES } from '../../../feactures/tipoDocumento/tipoDocumento.routes';
import { UNIDADMEDIDA_ROUTES } from '../../../feactures/unidadesMedida/unidadMedida.routes';
import { MATERIALES_ROUTES } from '../../../feactures/materiales/materiales.routes';

export const CONFIGURACION_ROUTES: Routes = [
  {
    path: 'Seguridad',
    children: [
      ...EMPLEADOS_ROUTES,
      ...USUARIOS_ROUTES,
      ...ROLES_ROUTES,
    ]
  },
  {
    path: 'Catalogos',
    children: [
      ...TIPODOCUMENTOS_ROUTES,
      ...UNIDADMEDIDA_ROUTES,
      ...MATERIALES_ROUTES
    ]
  },
  {
    path: 'ConfiguracionGeneral',
    children: [
      ...ROLES_ROUTES
    ]
  }
];