"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSurveyResponseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_survey_dto_1 = require("./create-survey.dto");
const create_response_dto_1 = require("./../../responses/dto/create-response.dto");
class UpdateSurveyResponseDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.IntersectionType)(create_survey_dto_1.CreateSurveyDto, create_response_dto_1.CreateResponseDto)) {
}
exports.UpdateSurveyResponseDto = UpdateSurveyResponseDto;
//# sourceMappingURL=update-survey-response.dto.js.map