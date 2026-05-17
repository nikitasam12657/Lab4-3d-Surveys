"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysService = void 0;
const common_1 = require("@nestjs/common");
const survey_entity_1 = require("./entities/survey.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let SurveysService = class SurveysService {
    constructor(surveyRepository) {
        this.surveyRepository = surveyRepository;
    }
    async create(createSurveyDto) {
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
    async findOne(surveryId) {
        const survey = await this.surveyRepository.findOne({ where: { id: surveryId } });
        return survey;
    }
    async update(surveryId, updateSurveyDto) {
        console.time('DBUpdate');
        const survey = await this.findOne(surveryId);
        Object.assign(survey, updateSurveyDto);
        const updated = await this.surveyRepository.save(survey);
        console.timeEnd('DBUpdate');
        return updated;
    }
    async remove(surveryId) {
        const surveryToDelete = await this.findOne(surveryId);
        await this.surveyRepository.remove(surveryToDelete);
        return surveryToDelete;
    }
    async createWithResponses(dto) {
        console.log('CREATED Responses CREATED');
        const newSurvey = this.surveyRepository.create({
            title: dto.title,
            description: dto.description,
            responses: dto.responses
        });
        const created = await this.surveyRepository.save(newSurvey);
        return created;
    }
};
exports.SurveysService = SurveysService;
exports.SurveysService = SurveysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(survey_entity_1.Survey)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SurveysService);
//# sourceMappingURL=surveys.service.js.map