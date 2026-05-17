import { Survey } from "../../surveys/entities/survey.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Response {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  textValue: string;

  @Column()
  imagePath: string;

  @ManyToOne(() => Survey, (survey) => survey.responses)
  public survey: Survey;
}
