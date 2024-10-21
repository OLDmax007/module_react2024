export const getPosts =async () => {
    const response =  await fetch('https://dummyjson.com/posts?limit=0');
    return response.json()
}