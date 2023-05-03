import  dataSource  from '../utils';
import { Grade } from "../entity/Grade";
import { Request, Response } from 'express';


const gradeController = {
  create: async (req: Request, res: Response) => {
    try {

      await dataSource.getRepository(Grade).save({
        grade: req.body.grade,
        wilderId: req.body.wilderId,
        skillsId: req.body.skillsId,
      });
      res.send("grade created");
    } catch (err) {
      console.log(err);
      res.send("error while grading the wilder");
    }
  },
  addGradeToOneWilder : async (req:Request, res: Response) => {
    const {wilderId} = req.body;
    const {skillId} = req.body;
    const {grade} = req.body;


    try {
      await dataSource.getRepository(Grade).save({
        wilderId,
        skillId,
        grade,
      });
      res.send('great success grading')
    } catch(error) {
      console.log(error)
      res.send('error grading the wilder')
    }
  }
};

export default gradeController;
