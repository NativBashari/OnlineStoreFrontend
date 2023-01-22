import { Product } from "./product.model";

export interface Category{
    id: number,
    name: string,
    description: string,
    image: string,
    products: Product[], 
    createdAt: Date,
    modifiedAt: Date
}