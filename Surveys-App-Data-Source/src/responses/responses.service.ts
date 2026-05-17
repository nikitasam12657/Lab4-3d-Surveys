import { Injectable } from '@nestjs/common';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { Response } from './entities/response.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ResponsesService {
  // {
  //   responseId: '123-55',
  //   surveyId: '123',
  //   userId: 'user007',
  //   questionId: '1',
  //   textValue: 'Some Answer 2',
  //   imagePath:
  //     'https://images.ctfassets.net/vwq10xzbe6iz/5sBH4Agl614xM7exeLsTo7/9e84dce01735f155911e611c42c9793f/rest-api.png',
  // }
  constructor(
    @InjectRepository(Response)
    private readonly responseRepository: Repository<Response>
  ){}

  async create(createResponseDto: CreateResponseDto) {
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

  async findOne(respId: string) {
    const response =  await this.responseRepository.findOne({ where: { id: respId } });
    return response;
  }

  async update(respId: string, updateResponseDto: UpdateResponseDto) {
    console.time('DBUpdate');

    const response = await this.findOne(respId); // перевірка інснування
    Object.assign(response!, updateResponseDto);
    const updated = await this.responseRepository.save(response!);

    console.timeEnd('DBUpdate');
    return updated;
  }

  async remove(respId: string) {
    const responseToDelete = await this.findOne(respId);
    await this.responseRepository.remove(responseToDelete!);    
    return responseToDelete;
  }
}
