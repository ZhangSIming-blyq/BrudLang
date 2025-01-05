import axios from 'axios'

// 创建 Axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8000', // 基础路径
    timeout: 5000, // 超时时间
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 自动添加 Token 到请求头
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
    (response) => response.data, // 返回实际数据
    (error) => {
        console.error('Request Error:', error.response?.data || error.message)
        return Promise.reject(error)
    }
)

export default service