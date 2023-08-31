import axios from '../libs/api.request'
import qs from 'qs'
/**
 * 登陆
 */
export const login = (data) => {
	return axios.request({
		url: 'hdapi/admin/login',
		method: 'post',
		data: qs.stringify(data)
	})
}

/**
 * 登陆
 */
export const getUserInfo = (query) => {
	return axios.request({
		url: 'hdapi/admin/queryUserByToken',
		method: 'get',
		params: query
	})
}