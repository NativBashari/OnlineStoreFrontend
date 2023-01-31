import { Category } from "./Category.model";
import { Discount } from "./Discount.model";
import { Size } from "./Size.model";

export interface Product{
    id:number,
    name: string,
    description: string,
    category: Category ,
    price: number,
    discount: Discount,
    image: string,
    sizes: Size[],
    createdAt: Date,
    modifiedAt: Date
}