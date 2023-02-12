import { Product } from "./ProductsManagement/product.model";
import { User } from "./user.model";

export interface userCart{
    id: number,
    products: Product[],
    userId: number,
    user: User | null
}