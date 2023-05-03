import express from 'express';
import wilderRouter from './wilderRouter';
import skillsRouter from './skillsRouter';
import postRouter from './postRouter'
import universityRouter from './university';

const router = express.Router()

router.use('/wilder', wilderRouter)
router.use('/skills', skillsRouter)
router.use('/post', postRouter)
router.use('/university', universityRouter)

export default router
