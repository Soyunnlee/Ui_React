import axios from 'axios'

// .env File
const router = process.env.REACT_APP_OPS_SERVER

export const API = axios.create({
    baseURL: `${router}/notice/`, 
    headers: {
        searchKey: str,
        pageNum : pageNum
    }
})