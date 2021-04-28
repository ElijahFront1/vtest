import axios from 'axios'

let postsURL = "https://jsonplaceholder.typicode.com/posts"
let usersURL = "https://jsonplaceholder.typicode.com/users"

const postPromise = axios.get(postsURL);
const userPromise = axios.get(usersURL);

export const newData = () => (dispatch) => {
    Promise.all([postPromise, userPromise]).then((values) => {
        dispatch(setNewData(values))
    });
}
export const searchPosts = (search) => (dispatch) => {
    dispatch(setSearch(search))
}

export const setNewData = (data) => ({ type: 'COMBINE_DATA', payload: data })
export const setSearch = (search) => ({ type: 'SEARCH_VALUE', payload: search })