/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import  dataSource  from '../utils';
import  {Wilder} from '../entity/Wilder';
import  {Skill} from '../entity/Skill';
import { Request, Response } from 'express';
import { Grade } from '../entity/Grade';

const wilderController = {
  create: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);

      res.send('wilder created');


    } catch (error) {

      console.log(error);
      res.send('error creating wilder');
    }
  },
  get: async (req:Request, res: Response) => {
    try {
      const allWilders = await dataSource
        .getRepository(Wilder).find({ relations: { grades: { skill: true }, universities : true } });
      res.send(allWilders);
    } catch (err) {
      console.log(err);
      res.send("Error while reading the wilders");
    }
  },
  getOne: async (req:Request, res: Response) => {
   const { id }: any = req.params;
    try {
      const oneWilder = await dataSource.getRepository(Wilder).findBy({
        id,
      });
      res.send(oneWilder);
    } catch (error){
      console.log(error)
      res.send('error retrieving the wilder');
    }
  },
  deletOne: async (req:Request, res: Response) => {
    const { id }: any = req.params;
    const db = dataSource.getRepository(Wilder);
    try {
      const wilderToDelete = await db.findBy({
        id,
      });
      await db.remove(wilderToDelete);
      res.send(`user ${id} has been deleted`);
    } catch (error) {
      console.log(error)
      res.send(`could not delete user ${id}`);
    }
  },

  updateOne: async (req: Request, res: Response) => {

    const { id }: any = req.params;
    const { name, city } = req.body


    const db = dataSource.getRepository(Wilder);
    try {
      const wilderToUpdate = await db.findOneBy({id});
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!wilderToUpdate) {
        res.status(404).send(`Wilder with ID ${id} not found`);
        return;
      }
      await db.update(wilderToUpdate, { name, city });
      res.send(`Wilder ${id} has been updated`);
    } catch (error) {
      console.log(error);
      res.send(`Could not update wilder ${id}`);
    }
  },

  addSkillToOneWilder: async (req: Request, res: Response) => {
    const dbWilder = dataSource.getRepository(Wilder);
    const dbSkills = dataSource.getRepository(Skill);
    const { id} = req.body;
    const  {skill}: any = req.body;
    console.log(req.body);
    try {
      const wilderToAddSkill: any = await dbWilder.findOneBy({ id });
      const skillToAdd = await dbSkills.findOneBy({ id: skill });
      if (skillToAdd) {
        if (wilderToAddSkill.skills) {
          wilderToAddSkill.skills.push(skillToAdd);
        } else {
          wilderToAddSkill.skills = [skillToAdd];
        }
        await dbWilder.save(wilderToAddSkill);
        res.send('skill added');

      } else {
        res.status(404).send('could not find skill');
      }
    } catch (error) {
      console.log(error)
      res.send('could not add skill');
    }
  },

  getGradesForOneWilder: async (req:Request, res: Response) =>{
      const dbGrade = dataSource.getRepository(Grade);
      const {wilderId} :any = req.params;
      try{
        const wilder = await dbGrade.findOneBy({wilderId})
        res.send(wilder)

      } catch(error){
        res.send('error')
      }
  },



};
export default wilderController;
