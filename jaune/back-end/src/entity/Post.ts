import  {Column,CreateDateColumn,Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Wilder } from './Wilder';
import { Comment } from './Comment';

@Entity()
export class Post{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title : string

  @Column()
  content : string

  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updated : Date

  @ManyToOne(() => Wilder, (wilder) =>  wilder.posts, {eager:true})
  wilder : Wilder;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments : Comment[]


}
