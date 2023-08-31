import express from 'express'
import { login } from '../api/users'

var router = express.Router()

router.post('/login', (req, res) => {
	login({user_name: 'admin', user_pwd: '666'}).then(result => {
		const {result: { data: { data: {user, token }}}} = {result}
		console.log('token',token)
		res.send({
			token,
			user
		})
	})
})

export default router