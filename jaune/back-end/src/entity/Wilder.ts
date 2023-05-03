import  {Column,Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grade } from './Grade';
import { Post } from './Post';
import { Comment } from './Comment';
import { University } from './University';

@Entity()
export class Wilder{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  city: string

  @OneToMany(() => Grade, (grade: Grade) => grade.wilder)
  grades: Grade[];

  @OneToMany(()=> Post, (post: Post) => post.wilders)
  posts : Post[]

  @OneToMany(() => Comment, (comment: Comment) => comment.wilder)
  comments: Comment[]

  @ManyToMany(() => University, {eager: true})
  @JoinTable()
  universities: University[]

}
