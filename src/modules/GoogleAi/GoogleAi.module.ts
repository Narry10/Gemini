import { Module } from '@nestjs/common';
import { GoogleAiService } from 'src/shares/sevicers/GoogleAiService';
import { GoogleAiController } from './GoogleAiController';

@Module({
  imports: [],
  controllers: [GoogleAiController],
  providers: [GoogleAiService],
})
export class GoogleAiModule {}
