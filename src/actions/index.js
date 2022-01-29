import axios from "axios"

const baseURL = "/api/users"
export const getUserByName = async (name)=>{
    let response = null;
    try {
        response = await axios.get(`${baseURL}/?name=${name}`)
        
    } catch (err) {
        console.log(err)
    }

    //filter by brand
    return{
        type:"SEARCH_LIST",
        payload:response.data
    }
}


export const getAllUsers = async ()=>{
    let response = null;
    try {
        response = await axios.get(`${baseURL}`)
        
    } catch (err) {
        console.log(err)
    }

    //filter by brand
    return{
        type:"USERS_LIST",
        payload:response.data
    }
}


export const getUserDetails = async (id)=>{
    let response = null;
    console.log("here")
    try {
        response = await axios.get(`${baseURL}/${id}`)

    } catch (err) {
        console.log(err)

    }

    return {
        type:'USER_DETAILS',
        payload:response.data
    }
}

export const registerUser = async (user)=>{
    let response = null;
    try {
        response = await axios.post(`${baseURL}`,user)

    } catch (err) {
        console.log(err)

    }

    return {
        type:'REGISTER-USER',
        payload:response.data
    }
}
export const updateUser = async (id,user)=>{
    let response = null;
    for(let i in user){
        console.log("User " + i + " value " + user[i] )
    }
    try {
        response = await axios.patch(`${baseURL}/${id}`,user)

    } catch (err) {
        console.log(err)

    }

    return {
        type:'UPDATE_USER',
        payload:response.data
    }
}
export const deleteUser = async (id)=>{
    let response = null;
    console.log("here")
    try {
        response = await axios.delete(`${baseURL}/${id}`)

    } catch (err) {
        console.log(err)

    }

    return {
        type:'DELETE-USER',
        payload:response.data
    }
}
export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS',
        payload:null
    }
}

