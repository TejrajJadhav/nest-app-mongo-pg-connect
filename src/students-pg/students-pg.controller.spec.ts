import { Test, TestingModule } from '@nestjs/testing';
import { StudentsPgController } from './students-pg.controller';
import { StudentsPgService } from './students-pg.service';

describe('StudentsPgController', () => {
  let controller: StudentsPgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsPgController],
      providers: [StudentsPgService],
    }).compile();

    controller = module.get<StudentsPgController>(StudentsPgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
