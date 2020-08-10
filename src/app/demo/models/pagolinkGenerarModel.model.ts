
import { cotizacionModel } from '../models/cotizacionModel.model';

export class pagolinkGenerarCabModel {
    externalId?: string;
    orderType?: string;
    description?: string;
    expirationDate?: string;
    amount?: number;
    customData?: pagolinkGenerarCustomDataModel;
    customer?: pagolinkGenerarCustomModel;
    products?: cotizacionModel[];
}

export class pagolinkGenerarCustomDataModel {
    edad?: number;
    nroFactura?: string;
    direccion?: string;
    dni?: string;
    colorFavorito?: string;
}

export class pagolinkGenerarCustomModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    documentType?: string;
    documentNumber?: string;
}


