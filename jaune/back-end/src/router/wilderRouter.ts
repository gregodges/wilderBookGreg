import  express  from 'express';
import wilderController from'../controller/wilder';
import gradeControlller from '../controller/grades';
import universityController from '../controller/university';

const  wilderRouter = express.Router()
wilderRouter.post('/', wilderController.create);
wilderRouter.get('/', wilderController.get);
wilderRouter.get('/:id', wilderController.getOne);
wilderRouter.put('/:id', wilderController.updateOne);
wilderRouter.delete('/:id', wilderController.deletOne);
wilderRouter.post('/skill', wilderController.addSkillToOneWilder)


wilderRouter.post('/skillGrade', gradeControlller.addGradeToOneWilder);
wilderRouter.get('/skillGrade/:id', wilderController.getGradesForOneWilder);
wilderRouter.post('/university', universityController.addUniToOneWilder)

// app.post('/api/grades', gardesController.postOneGrade);
// app.get('/api/grades', gardesController.getAll);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default wilderRouter
