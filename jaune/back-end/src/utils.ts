
import  {DataSource} from 'typeorm';
import {Skill} from './entity/Skill';
import { Wilder } from './entity/Wilder';
import { Grade } from './entity/Grade';
import { Post } from './entity/Post';
import { Comment } from './entity/Comment';
import { University } from './entity/University';


 const dataSource=  new DataSource({
    type: 'sqlite',
    database: './wildersdb.sqlite',
    synchronize: true,
    entities: [Wilder, Skill, Grade, Post, Comment, University],
    // logging: ["query", "error"]
  })


export default dataSource;
