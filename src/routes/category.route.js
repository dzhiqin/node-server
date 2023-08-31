import express from 'express'
const router = express.Router()
import {
  getRecords,
  getCategoryBooks,
  deleteRecord,
  createRecord,
  getCategoryAuthors
} from '../controllers/category.controller'

router.get('/',getRecords)
router.post('/getBooks',getCategoryBooks)
router.post('/delete',deleteRecord)
router.post('/create',createRecord)
router.post('/getAuthors',getCategoryAuthors)
export default router