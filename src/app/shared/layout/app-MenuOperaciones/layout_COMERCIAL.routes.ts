import { Routes } from '@angular/router';
import { CLIENTE_ROUTES } from '../../../feactures/clientes/clientes.routes';
import { TIPOCLIENTE_ROUTES } from '../../../feactures/tipoClientes/tipoCliente.routes';
import { EMPRESASCLIENTES_ROUTES } from '../../../feactures/empresasClientes/empresasClientes.routes';
import { CONTACTOSCLIENTES_ROUTES } from '../../../feactures/contactosClientes/contactosClientes.routes';
import { TIPOTARIFA_ROUTES } from '../../../feactures/tarifasTipoMaterial/tarifasTipoMaterial.routes';
import { CONTRATOS_ROUTES } from '../../../feactures/contratos/contratos.routes';
import { DOCUMENTOS_ROUTES } from '../../../feactures/documentos/documentos.routes';
import { TIPODOCUMENTOS_ROUTES } from '../../../feactures/tipoDocumento/tipoDocumento.routes';

export const COMERCIAL_ROUTES: Routes = [
    {
        path: 'GestionComercial',
        children: [
            ...CLIENTE_ROUTES,
            ...TIPOCLIENTE_ROUTES,
            ...EMPRESASCLIENTES_ROUTES,
            ...CONTACTOSCLIENTES_ROUTES,
            ...TIPOTARIFA_ROUTES,
            ...CONTRATOS_ROUTES
        ]
    },
    {
        path: 'Documentos',
        children: [
            ...DOCUMENTOS_ROUTES,
            ...TIPODOCUMENTOS_ROUTES
        ]
    },
    {
        path: 'TarifasContratos',
        children: [
            ...TIPOTARIFA_ROUTES,
            ...CONTRATOS_ROUTES
        ]
    }
];