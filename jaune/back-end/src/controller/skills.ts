import  dataSource  from '../utils';
import {Skill} from '../entity/Skill';
import { Request, Response } from 'express';


const skillsController = {
  getAllSkills: async (req: Request, res: Response) => {
    const db = dataSource.getRepository(Skill);

    try {
      const allSkills = await db.find();
      res.send(allSkills);
    } catch (err) {
      res.send('could not load all Skills');
    }
  },
  getOneSkill: async (req: Request, res: Response) => {
    const db = dataSource.getRepository(Skill);
    const { id } : any = req.params;
    try {
      const oneSkill = await db.findBy({ id });
      res.send(oneSkill);
    } catch (error) {
      res.status(401).send('could not find the skill');
    }
  },
  createOneSkill: async (req: Request, res: Response) => {
    const db = dataSource.getRepository(Skill);
    const name = req.body;
    try {
      await db.save(name);
      res.send('new skill has been added');
    } catch (err) {
      console.log(err);
      res.send('could not create new skill');
    }
  },

  deleteOneSkill: async (req: Request, res: Response) => {
    const db = dataSource.getRepository(Skill);
    const { id }: any = req.params;
    try {
      const skillToDelete = await db.findBy({
        id,
      });
      await db.remove(skillToDelete);
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      res.send(`skill ${id} has been deleted`);
    } catch (error) {
      console.log(error);
      res.send('could not delete skill');
    }
  },
  updateOneSkill: async (req: Request, res: Response) => {
    const db = dataSource.getRepository(Skill);
    const { id }: any = req.params;
    const { newData } = req.body;
    try {
      const skillToUpdate: any = await db.findBy({ id });
      await db.update(skillToUpdate, { name: newData });
      console.log(newData);
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      res.send(`skill ${id} has been updated`);
    } catch (error) {
      res.send('could not update the skill');
      console.log(error);
    }
  },
};
export default skillsController;
