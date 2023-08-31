import {Book} from '../models'
import {Result} from '../libs/result'
import { getDateTime } from '../libs/tools'

export const getRecordsByPage = (req,res) => {
	const { page,pageSize } = req.query
	Book.findAll({
		attributes: ['id','name','author'],
		limit: pageSize,
		offset: (page-1) * pageSize,
		order: [['id','DESC']]
	}).then(books => {
		return res.status(200).json({books})
	}).catch(err => {
		return res.status(400).json({err})
	})
}
export const getRecordById = (req,res) => {
	const id = req.params.id
	Book.findByPk(id).then(async(book) => {
		if(!book){
			return res.status(200).json({data: null,message: '找不到资源'})
		}
		const author = await book.getAuthor()
		const category = await book.getCategory()
		const data = {
			...book.dataValues,
			createdAt: getDateTime(book.dataValues.createdAt),
			updatedAt: getDateTime(book.dataValues.updatedAt),
			authorName:author?.dataValues.name,
			categoryName:category?.dataValues.name
		}
		// return res.json(Result.success(data))
		return res.status(200).json({data})
	}).catch(err => {
		return res.status(500).json(Result.failed(err))
		// return res.status(500).json(err)
	})
}