import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { UpdateResponseDto } from 'src/responses/dto/update-response.dto';
import { UpdateSurveyResponseDto } from './dto/update-survey-response.dto';
import { ResponsesService } from 'src/responses/responses.service';
import { Response } from './../responses/entities/response.entity';
import { CreateSurveyWithResponsesDto } from './dto/create-survey-with-responses.dto';

@Controller('surveys')
export class SurveysController {
  constructor(
    private readonly surveysService: SurveysService,
  ) {}
  //https://2xtm2s-3000.csb.app/surveys
  //curl -X POST https://2xtm2s-3000.csb.app/surveys -H 'Content-Type: application/json' -d '{"surveyId": "777", "title": "Some survey about Students", "description": "Description Some Survey about Students"}'  -H 'Cookie: csb_preview_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJDb2RlU2FuZGJveCIsImV4cCI6MTc3NzQ4NTYxNiwiaWF0IjoxNzc0ODkzNjE2LCJpc3MiOiJDb2RlU2FuZGJveCIsImp0aSI6ImQ0MzhlMzAyLTcwMDktNGM5Ny04NzkwLWZkOThiODZmYzU0MyIsIm5iZiI6MTc3NDg5MzYxNSwicGVybWlzc2lvbiI6InByZXZpZXciLCJzaG9ydGlkIjoiMnh0bTJzIiwic3ViIjoiVXNlcjp1c2VyX1BrWnJTSFByUnNMZE43c1lEOEEzeG8iLCJ0eXAiOiJhY2Nlc3MifQ.QvfwRYRgOKCfdy-EVt0BuxzseIZ2oRoK4qforw9pS_Wo2ghxoQLTl85kMcN6GinFZIm8rbXF8n15-ZktEzqEHg'
  @Post()
  create(@Body() createsurveysDto: CreateSurveyDto) {
    return this.surveysService.create(createsurveysDto);
  }

  @Get()
  findAll() {
    return this.surveysService.findAll();
  }

  @Get(':id/responses ')
  findOne(@Param('id') id: string) {
    return this.surveysService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveyDto: UpdateSurveyDto) {
    return this.surveysService.update(id, updateSurveyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveysService.remove(id);
  }

  @Patch(':sId/responses/:rId/')
  async updateResponsesBySurveysId(
    @Param('sId') sId: string,
    @Param('rId') rId: string,
    @Body() updatesurveyresponsedto: UpdateSurveyResponseDto,
  ) {
    console.log(updatesurveyresponsedto);
    // const allResponses = await this.responsesService.findAll();
    const updatedResponse = {};
    

    return updatedResponse;
  }

  @Post('create-with-responses')
  async createSurveyWithResponses(@Body() createSurveyWithResponsesDto: CreateSurveyWithResponsesDto) {
    return await this.surveysService.createWithResponses(createSurveyWithResponsesDto);
  }
}
