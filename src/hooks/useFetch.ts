import {useEffect, useState} from "react";
import {dummyJsonData} from "../services/api.dj.service";
import {IDJResponse, IPost, IProduct, IUser} from "../models/BasicModels";


const useFetch = <T>(endpoint: string) => {
    const [dataOfApi, setDataOfApi] = useState<any>([]);
    useEffect(() => {
        dummyJsonData<T>(endpoint).then((data:IDJResponse & T) => {
            setDataOfApi(data)
        })
    }, []);

    return dataOfApi
}


export default useFetch