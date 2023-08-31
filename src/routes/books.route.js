import express from 'express'
const router = express.Router()
import {
	getRecordById,
	getRecordsByPage
} from '../controllers/book.controller.js'

router.get('/',getRecordsByPage)
router.get('/:id',getRecordById)
export default router