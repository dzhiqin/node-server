import { Category,Book,Author } from '../models'
import { Result } from '../libs/result'
// import { Validator } from '../libs/validator'

export const getRecords = (req,res) => {
	Category.findAll({
		attributes: ['id','name'],
	}).then(categories => {
		return res.json(Result.success(categories))
	}).catch(err => {
		return res.status(500).json(Result.failed(err))
	})
}
export const getCategoryBooks = (req,res) => {
	const { id } = req.body
	// Category.findByPk(id).then(async(category) => {
	//   if(category){
	//     const books = await category.getBooks()
	//     console.log('books',books);
	//     return res.json(Result.success(books))
	//   }else{
	//     return res.json(Result.recordNotFound({id}))
	//   }
	// }).catch(err => {
	//   return res.status(400).json(Result.failed(err))
	// })

	Category.findAll({
		attributes: ['id','name'],
		where:{id},
		include: {model: Book,attributes:['id','name']}
	}).then(books => {
		return res.json(Result.success(books))
	}).catch(err => {
		return res.status(500).json(Result.failed(err))
	})
}
export const deleteRecord = (req,res) => {
	const {id} = req.body
	Category.destroy({
		where: {id: id}
	}).then(() => {
		return res.json(Result.success(null))
	}).catch(err => {
		return res.status(500).json(Result.failed(err))
	})
}
export const createRecord = (req,res) => {
	let { name } = req.body
	console.log('name=',name)
	Category.create({
		name
	}).then(category => {
		return res.json(Result.success(category))
	}).catch(err => {
		return res.status(500).json(Result.failed(err))
	})
}
export const getCategoryAuthors = (req,res) => {
	const { id } = req.body
	Category.findAll({
		where: {id},
		attributes: ['id','name'],
		include: {model: Author,attributes: ['id','name']}
	}).then(authors => {
		return res.json(Result.success(authors))
	}).catch(err => {
		return res.status(500).json(Result.failed(err))
	})
}