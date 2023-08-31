import express from 'express'
import { login, getUserInfo } from '../api/users'

var router = express.Router()

router.post('/login', (req, res, next) => {
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