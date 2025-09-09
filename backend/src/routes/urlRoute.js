import express from 'express'
import { getUrl, postUrl } from '../controllers/urlController.js'
import { validarUrl } from '../middlewares/validation.js';

const router = express.Router()

router.post('/url', validarUrl, postUrl)

router.get('/url/:shortUrl', getUrl)

export default router;