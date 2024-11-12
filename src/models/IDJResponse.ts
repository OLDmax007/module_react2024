import {IProduct} from "./IProduct";

export interface IDJResponse {
    skip: number,
    total: number,
    limit: number,
    products?: IProduct[],
    carts?: any
}