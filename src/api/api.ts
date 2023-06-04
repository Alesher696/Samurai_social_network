import axios from "axios";


export type DataType={
    email:string
    password: string
    rememberMe?: boolean
    captcha?:boolean
}

const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '814d3cf1-9151-4829-ad9e-c7f2b77f0f6c'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(userId: number) {
        return Instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser(userId: number) {
        return Instance.post(`follow/${userId}`).then(response => response.data)
    },

}

export const authAPI = {
    authMe() {
        return Instance.get(`auth/me`).then(response => response.data)
    },
    login(data:DataType){
        return Instance.post(`/auth/login`, data).then(res=> res.data)
    },
    logOut(){
        return Instance.delete(`/auth/login`).then(res=> res.data)
    }
}

/// {} - data ?????
export const profileAPI = {
    getProfile(userId:number = 2){
        return Instance.get(`profile/${userId}`)
    }
}