import express from 'express';
import universityController from '../controller/university';

const universityRouter = express.Router();

universityRouter.post('/', universityController.createUniversity)
universityRouter.get('/', universityController.getUniversity)
universityRouter.post('/wilder', universityController.addUniToOneWilder)


export default universityRouter
