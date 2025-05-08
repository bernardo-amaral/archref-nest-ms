import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  initDate: Date;

  @Column({ type: 'varchar' })
  endDate: Date;
}
