import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { UpdateSurveyResponseDto } from './dto/update-survey-response.dto';
import { CreateSurveyWithResponsesDto } from './dto/create-survey-with-responses.dto';
export declare class SurveysController {
    private readonly surveysService;
    constructor(surveysService: SurveysService);
    create(createsurveysDto: CreateSurveyDto): Promise<{
        title: string;
        description: string;
    }>;
    findAll(): Promise<import("./entities/survey.entity").Survey[]>;
    findOne(id: string): Promise<import("./entities/survey.entity").Survey>;
    update(id: string, updateSurveyDto: UpdateSurveyDto): Promise<import("./entities/survey.entity").Survey>;
    remove(id: string): Promise<import("./entities/survey.entity").Survey>;
    updateResponsesBySurveysId(sId: string, rId: string, updatesurveyresponsedto: UpdateSurveyResponseDto): Promise<{}>;
    createSurveyWithResponses(createSurveyWithResponsesDto: CreateSurveyWithResponsesDto): Promise<import("./entities/survey.entity").Survey>;
}
