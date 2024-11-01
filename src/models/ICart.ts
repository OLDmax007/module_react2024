import {IProduct} from "./IProduct";

export interface ICart {
    uniqueId: number;
    id: number;
    products: IProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}