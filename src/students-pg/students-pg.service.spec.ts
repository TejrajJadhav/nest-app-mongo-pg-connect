import { Test, TestingModule } from '@nestjs/testing';
import { StudentsPgService } from './students-pg.service';

describe('StudentsPgService', () => {
  let service: StudentsPgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsPgService],
    }).compile();

    service = module.get<StudentsPgService>(StudentsPgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
