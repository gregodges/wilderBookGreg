import express from 'express'
import skillsController from'../controller/skills';

const skillsRouter = express.Router();
skillsRouter.post('/', skillsController.createOneSkill);
skillsRouter.get('/', skillsController.getAllSkills);
skillsRouter.get('/:id', skillsController.getOneSkill);
skillsRouter.delete('/:id', skillsController.deleteOneSkill);
skillsRouter.put('/:id', skillsController.updateOneSkill);

// app.get('Skill', wilderController.getWilderBySkills);

export default skillsRouter
