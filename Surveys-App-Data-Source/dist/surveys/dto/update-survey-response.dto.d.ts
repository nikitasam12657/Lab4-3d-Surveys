import { CreateSurveyDto } from './create-survey.dto';
import { CreateResponseDto } from './../../responses/dto/create-response.dto';
declare const UpdateSurveyResponseDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSurveyDto & CreateResponseDto>>;
export declare class UpdateSurveyResponseDto extends UpdateSurveyResponseDto_base {
}
export {};
