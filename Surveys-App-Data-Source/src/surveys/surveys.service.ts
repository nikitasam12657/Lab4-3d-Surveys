import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';
import { uuidv7 } from 'uuidv7';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSurveyWithResponsesDto } from './dto/create-survey-with-responses.dto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,    
  ) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const newSurvey = {
      ...createSurveyDto,
    };
    const createdSurvey = await this.surveyRepository.create(newSurvey);
    await this.surveyRepository.save(createdSurvey);
    return newSurvey;
  }

  async findAll() {
    return await this.surveyRepository.find();
  }

  async findOne(surveryId: string) {
    const survey: Survey = await this.surveyRepository.findOne(
      { where: { id: surveryId }}
    );
    return survey;
  }

  async update(surveryId: string, updateSurveyDto: UpdateSurveyDto) {
    console.time('DBUpdate');

    const survey = await this.findOne(surveryId); // перевірка інснування
    Object.assign(survey!, updateSurveyDto);
    const updated = await this.surveyRepository.save(survey!);

    console.timeEnd('DBUpdate');
    return updated;    
  }

  async remove(surveryId: string) {
    const surveryToDelete = await this.findOne(surveryId);
    await this.surveyRepository.remove(surveryToDelete!);    
    return surveryToDelete;
  }

  async createWithResponses(dto: CreateSurveyWithResponsesDto) {
    // const createdResponses = dto.responsesIDs.map(id => ({ id }));
    console.log('CREATED Responses CREATED');
    // console.log(createdResponses);
    const newSurvey = this.surveyRepository.create({
        title: dto.title,
        description: dto.description,
        responses: dto.responses
    });

    const created = await this.surveyRepository.save(newSurvey);
    return created;
  }

}
