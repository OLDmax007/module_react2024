import axiosApi from "./axiosApi";

export const getUsers = async () => {
    const axiosResponse = await axiosApi.get('/users', {
        params: {
            limit: 5
        }
    })
    return axiosResponse.data
}

export default axiosApi;