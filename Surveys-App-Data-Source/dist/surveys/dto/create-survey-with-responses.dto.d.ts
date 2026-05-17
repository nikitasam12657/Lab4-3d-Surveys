import { CreateResponseDto } from "src/responses/dto/create-response.dto";
import { CreateSurveyDto } from "./create-survey.dto";
export declare class CreateSurveyWithResponsesDto extends CreateSurveyDto {
    responses: CreateResponseDto[];
}
