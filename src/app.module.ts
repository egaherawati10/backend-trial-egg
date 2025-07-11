import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '**************',
      username: 'postgres',
      entities: [],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    UsersModule, DoctorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

// @Module({
//   imports: [UsersModule, DoctorsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
export class AppModule {}
