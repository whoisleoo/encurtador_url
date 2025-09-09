import express from 'express'
import { postUrl } from '../controllers/urlController.js'

const router = express.Router()

router.post('/url', postUrl)

export default router;