import request from '@/utils/request'
// 引入自动生成的 API 文件
import * as generatedApi from './generated-api' // 假设生成的文件是 generated-api.js
// 包装生成的 API 调用以使用自定义 Axios 实例
const api = {}
Object.keys(generatedApi).forEach((key) => {
    api[key] = (...args) => generatedApi
    [key](...args)
        .then((config) => request(config))
})
export default api