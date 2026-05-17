import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';
import { Repository } from 'typeorm';
import { CreateSurveyWithResponsesDto } from './dto/create-survey-with-responses.dto';
export declare class SurveysService {
    private readonly surveyRepository;
    constructor(surveyRepository: Repository<Survey>);
    create(createSurveyDto: CreateSurveyDto): Promise<{
        title: string;
        description: string;
    }>;
    findAll(): Promise<Survey[]>;
    findOne(surveryId: string): Promise<Survey>;
    update(surveryId: string, updateSurveyDto: UpdateSurveyDto): Promise<Survey>;
    remove(surveryId: string): Promise<Survey>;
    createWithResponses(dto: CreateSurveyWithResponsesDto): Promise<Survey>;
}
