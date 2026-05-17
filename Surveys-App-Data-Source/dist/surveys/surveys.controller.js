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
exports.SurveysController = void 0;
const common_1 = require("@nestjs/common");
const surveys_service_1 = require("./surveys.service");
const create_survey_dto_1 = require("./dto/create-survey.dto");
const update_survey_dto_1 = require("./dto/update-survey.dto");
const update_survey_response_dto_1 = require("./dto/update-survey-response.dto");
const create_survey_with_responses_dto_1 = require("./dto/create-survey-with-responses.dto");
let SurveysController = class SurveysController {
    constructor(surveysService) {
        this.surveysService = surveysService;
    }
    create(createsurveysDto) {
        return this.surveysService.create(createsurveysDto);
    }
    findAll() {
        return this.surveysService.findAll();
    }
    findOne(id) {
        return this.surveysService.findOne(id);
    }
    update(id, updateSurveyDto) {
        return this.surveysService.update(id, updateSurveyDto);
    }
    remove(id) {
        return this.surveysService.remove(id);
    }
    async updateResponsesBySurveysId(sId, rId, updatesurveyresponsedto) {
        console.log(updatesurveyresponsedto);
        const updatedResponse = {};
        return updatedResponse;
    }
    async createSurveyWithResponses(createSurveyWithResponsesDto) {
        return await this.surveysService.createWithResponses(createSurveyWithResponsesDto);
    }
};
exports.SurveysController = SurveysController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_survey_dto_1.CreateSurveyDto]),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/responses '),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_survey_dto_1.UpdateSurveyDto]),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':sId/responses/:rId/'),
    __param(0, (0, common_1.Param)('sId')),
    __param(1, (0, common_1.Param)('rId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_survey_response_dto_1.UpdateSurveyResponseDto]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "updateResponsesBySurveysId", null);
__decorate([
    (0, common_1.Post)('create-with-responses'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_survey_with_responses_dto_1.CreateSurveyWithResponsesDto]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "createSurveyWithResponses", null);
exports.SurveysController = SurveysController = __decorate([
    (0, common_1.Controller)('surveys'),
    __metadata("design:paramtypes", [surveys_service_1.SurveysService])
], SurveysController);
//# sourceMappingURL=surveys.controller.js.map