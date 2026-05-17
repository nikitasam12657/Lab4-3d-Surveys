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
exports.ResponsesService = void 0;
const common_1 = require("@nestjs/common");
const response_entity_1 = require("./entities/response.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ResponsesService = class ResponsesService {
    constructor(responseRepository) {
        this.responseRepository = responseRepository;
    }
    async create(createResponseDto) {
        const newResponse = {
            ...createResponseDto,
        };
        const createdResponse = await this.responseRepository.create(newResponse);
        await this.responseRepository.save(createdResponse);
        return createdResponse;
    }
    async findAll() {
        return await this.responseRepository.find();
    }
    async findOne(respId) {
        const response = await this.responseRepository.findOne({ where: { id: respId } });
        return response;
    }
    async update(respId, updateResponseDto) {
        console.time('DBUpdate');
        const response = await this.findOne(respId);
        Object.assign(response, updateResponseDto);
        const updated = await this.responseRepository.save(response);
        console.timeEnd('DBUpdate');
        return updated;
    }
    async remove(respId) {
        const responseToDelete = await this.findOne(respId);
        await this.responseRepository.remove(responseToDelete);
        return responseToDelete;
    }
};
exports.ResponsesService = ResponsesService;
exports.ResponsesService = ResponsesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(response_entity_1.Response)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResponsesService);
//# sourceMappingURL=responses.service.js.map