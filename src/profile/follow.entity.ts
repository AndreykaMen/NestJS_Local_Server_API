import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'folllows',
})
export class FollowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  followerId: number;

  @Column()
  followingId: number;
}
