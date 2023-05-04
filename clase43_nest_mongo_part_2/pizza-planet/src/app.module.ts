import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import FirstMiddleware from './middleware/first.middleware';

@Module({
  imports: [PizzasModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirstMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
