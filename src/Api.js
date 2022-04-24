import axios from 'axios'
const link="http://127.0.0.1:8000/home/api"

export const newforming=async(obj)=>{
    const t= await axios.post(`${link}/postt`,obj)
    return t;
}

export const listing=async()=>{
    const t =await axios.get(`${link}/gett`)
    return t;
    
}
