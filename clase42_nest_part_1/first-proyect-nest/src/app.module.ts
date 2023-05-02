import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PepesPepitosModule } from './pepes-pepitos/pepes-pepitos.module';

@Module({
  imports: [UsersModule, PepesPepitosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
