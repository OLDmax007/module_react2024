import axios from "axios";
import {BaseResponseType} from "../models/BaseResponseType";
import {IProduct} from "../models/IProduct";

const axiosDummyJson = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
})


export const productsService = {
    getProducts: async ():Promise<IProduct[]> => {
        const {data:{products}} = await axiosDummyJson.get<BaseResponseType & { products: IProduct[] }>('/products');
        return products
    },

    getProduct: async (id:string):Promise<IProduct> => {
        return (await axiosDummyJson.get<IProduct>(`/products/` + id)).data;
    },

}

