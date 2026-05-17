import { PartialType, IntersectionType } from '@nestjs/mapped-types';
import { CreateSurveyDto } from './create-survey.dto';
import { CreateResponseDto } from './../../responses/dto/create-response.dto';

// 1. Створюємо спільний тип
export class UpdateSurveyResponseDto extends PartialType(
  IntersectionType(CreateSurveyDto, CreateResponseDto),
) {}
