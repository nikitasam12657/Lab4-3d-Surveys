import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { Response } from './entities/response.entity';
import { Repository } from 'typeorm';
export declare class ResponsesService {
    private readonly responseRepository;
    constructor(responseRepository: Repository<Response>);
    create(createResponseDto: CreateResponseDto): Promise<Response>;
    findAll(): Promise<Response[]>;
    findOne(respId: string): Promise<Response>;
    update(respId: string, updateResponseDto: UpdateResponseDto): Promise<Response>;
    remove(respId: string): Promise<Response>;
}
