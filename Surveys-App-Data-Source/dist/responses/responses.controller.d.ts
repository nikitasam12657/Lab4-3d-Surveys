import { ResponsesService } from './responses.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
export declare class ResponsesController {
    private readonly responsesService;
    constructor(responsesService: ResponsesService);
    create(createResponseDto: CreateResponseDto): Promise<import("./entities/response.entity").Response>;
    findAll(): Promise<import("./entities/response.entity").Response[]>;
    findOne(id: string): Promise<import("./entities/response.entity").Response>;
    update(id: string, updateResponseDto: UpdateResponseDto): Promise<import("./entities/response.entity").Response>;
    remove(id: string): Promise<import("./entities/response.entity").Response>;
}
