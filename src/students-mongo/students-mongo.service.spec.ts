import { Test, TestingModule } from '@nestjs/testing';
import { StudentsMongoService } from './students-mongo.service';

describe('StudentsMongoService', () => {
  let service: StudentsMongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsMongoService],
    }).compile();

    service = module.get<StudentsMongoService>(StudentsMongoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
