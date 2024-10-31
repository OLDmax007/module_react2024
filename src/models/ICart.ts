import {IProduct} from "./IProduct";

export interface ICart {
    uniqeId: number;
    id: number;
    products: IProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}