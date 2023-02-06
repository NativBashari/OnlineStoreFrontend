import { Category } from "./Category.model";
import { Discount } from "./Discount.model";

export interface Product{
    id:number,
    name: string,
    description: string,
    categoryId: number | null,
    category: Category| null ,
    price: number,
    discountId: number| null,
    discount: Discount | null,
    image: string,
    createdAt: Date,
    modifiedAt: Date
}