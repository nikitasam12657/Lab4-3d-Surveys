import { Response } from "../../responses/entities/response.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Survey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public title: string;
  
  @Column()
  public description: string;

  @OneToMany(() => Response, (response: Response) => response.survey, { cascade: true })
  public responses: Response[];
}
