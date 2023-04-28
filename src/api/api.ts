import axios from "axios";


const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '814d3cf1-9151-4829-ad9e-c7f2b77f0f6c'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>
                response.data
            )
    },
    unfollowUser(userId: number) {
        return Instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser(userId: number) {
        return Instance.post(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId:number = 2){
        return Instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    authMe() {
        return Instance.get(`auth/me`).then(response => response.data)
    },
}