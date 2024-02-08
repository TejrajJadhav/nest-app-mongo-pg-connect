import { Test, TestingModule } from '@nestjs/testing';
import { StudentsMongoController } from './students-mongo.controller';
import { StudentsMongoService } from './students-mongo.service';

describe('StudentsMongoController', () => {
  let controller: StudentsMongoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsMongoController],
      providers: [StudentsMongoService],
    }).compile();

    controller = module.get<StudentsMongoController>(StudentsMongoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
