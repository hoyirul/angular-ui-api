export interface OrderModel {
    count:   number;
    product: Product;
}

export interface Product {
    productName: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toOrderModel(json: string): OrderModel[] {
        return JSON.parse(json);
    }

    public static orderModelToJson(value: OrderModel[]): string {
        return JSON.stringify(value);
    }
}
