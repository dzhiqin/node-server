import express from 'express'
const router = express.Router()
import {
	getRecordById,
	getRecordsByPage
} from '../controllers/book.controller.js'
import { bookIndexValidator } from '../validators/book.validtor.js'

router.get('/',bookIndexValidator,getRecordsByPage)
router.get('/:id',getRecordById)
export default router