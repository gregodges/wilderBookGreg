import  {Column,CreateDateColumn,Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Post } from './Post';
import { Wilder } from './Wilder';

@Entity()
export class Comment{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastUpdatedDate: Date;

  @ManyToOne(() => Wilder, (wilder: Wilder) => wilder.comments, {onDelete: 'CASCADE', eager:true})
  wilder: Wilder;

  @ManyToOne(() => Post, (post: Post) => post.comments, {onDelete: 'CASCADE', eager:true})
  post: Post;
}
