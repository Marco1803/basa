


export class cotizacionModel {
    productId?: string;
    sku: string;
    productName: string;
    productDescription: string;
    image: string;
    quantity: number;
    unitPrice: number;
    subtotalPrice: number;
    customData: cotizacionCustomModel;
}

export class cotizacionCustomModel {
    k1?: string;
    k2?: string;
    entero?: number;
    decimal?: number;
    booleano?: boolean;

}



