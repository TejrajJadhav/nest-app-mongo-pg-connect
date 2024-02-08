import { Module } from '@nestjs/common';
import { StudentsPgService } from './students-pg.service';
import { StudentsPgController } from './students-pg.controller';

@Module({
  controllers: [StudentsPgController],
  providers: [StudentsPgService]
})
export class StudentsPgModule {}
