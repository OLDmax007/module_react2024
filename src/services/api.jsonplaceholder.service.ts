import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)

const usersService = {
    getUsers: async ()  => {
        return (await axiosInstance.get('/users')).data
    }
}


const postsService = {
    getPosts: async ()  => {
        return (await axiosInstance.get('/posts')).data
    }
}

const commentsService = {
    getComments: async ()  => {
        return (await axiosInstance.get('/comments')).data
    }
}

export { usersService, postsService, commentsService };