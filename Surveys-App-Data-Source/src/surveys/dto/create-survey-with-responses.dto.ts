import { CreateResponseDto } from "src/responses/dto/create-response.dto";
import { CreateSurveyDto } from "./create-survey.dto";

export class CreateSurveyWithResponsesDto extends CreateSurveyDto {    
    public responses: CreateResponseDto[];
  }