import joi from 'joi'
import { Result } from '../libs/result'

export const bookIndexValidator = (req,res,next) => {
	console.log('query===',req.query)
	const schema = joi.object({
		page: joi.number().integer().required(),
		pageSize: joi.number().integer().required(),
	}) 
	const {error} = schema.validate(req.query)
	if(error){
		res.status(400).json(Result.validateFailed(error.details[0].message))
	}else{
		next()
	}
}

// const Joi = require('joi')
// module.exports = {
// 	async register(req,res,next){
// 		const schema =Joi.object({
// 			page: Joi.number().required(),
// 			pageSize: Joi.number().required()
// 		}) 
// 		const {error} = schema.validate(req.query)
// 		console.log(error)
// 		if(error){
// 			res.status(400).send({error: error.details[0].message})
// 		}else{
// 			next()
// 		}
// 	}
// }