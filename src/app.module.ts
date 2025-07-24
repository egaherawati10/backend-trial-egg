import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       password: '**************',
//       username: 'postgres',
//       entities: [],
//       database: 'postgres',
//       synchronize: true,
//       logging: true,
//     }),
//     UsersModule
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, AccountsModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
