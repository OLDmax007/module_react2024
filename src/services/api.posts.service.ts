import axiosApi from "./axiosApi";

export const getPosts =async () => {
    const axiosResponse =  await axiosApi.get('/posts', {
        params: {
            limit: 0
        }
    })
    return axiosResponse.data
}

