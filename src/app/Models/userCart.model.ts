import { Product } from "./ProductsManagement/product.model";
import { User } from "./user.model";

export interface userCart{
    id: number,
    products: Product[] | null,
    userId: number,
    user: User | null
}