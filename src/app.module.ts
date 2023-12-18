import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleAiModule } from './modules/GoogleAi/GoogleAi.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    GoogleAiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
