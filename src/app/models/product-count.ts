export interface ProductModel {
    count:    number;
    category: Category;
}

export interface Category {
    category_name: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toproduct(json: string): ProductModel[] {
        return JSON.parse(json);
    }

    public static productToJson(value: ProductModel[]): string {
        return JSON.stringify(value);
    }
}