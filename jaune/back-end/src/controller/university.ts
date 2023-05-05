import { University } from "../entity/University";
import { Request, Response } from 'express';
import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";



const universityController = {

  createUniversity: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const dbUni = dataSource.getRepository(University)
      await dbUni.save({ name })
      res.send('Uni created')
    } catch (error) {
      res.send('error creating university')
      console.log(error)
    }
  },

  getUniversity: async (req: Request, res: Response) => {
    try {
      const dbUni = dataSource.getRepository(University)
      const allUni = await dbUni.find()
      res.send(allUni)
    } catch (error) {
      res.send('error retrieving universities')
    }
  },
  addUniToOneWilder: async (req: Request, res: Response) => {
    try {
      const dbWilder = dataSource.getRepository(Wilder);
      const {uniId} = req.body;
      const [wilder]: any = await dbWilder.findBy({ id: req.body.wilderId });
      const uniToAdd: any = await dataSource.getRepository(University).findBy({ id: uniId });
      console.log('uniId' , uniId);

      const currentUniversities =  wilder.universities ? wilder.universities : []
      const allUni = await dataSource.getRepository(University).find()
      console.log('wilder', wilder)

      wilder.universities = currentUniversities.concat(uniToAdd);

      await dbWilder.save(wilder)
      res.send('ok')

    } catch (error) {
      console.log(error)
      res.send('error');
    }
  }

}
export default universityController
