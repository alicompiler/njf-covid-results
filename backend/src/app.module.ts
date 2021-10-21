import { Module } from '@nestjs/common';
import { AppController } from './Api/app.controller';
import { AppService } from './Services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
