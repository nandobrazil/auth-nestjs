import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AutjController } from './autj/autj.controller';

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
  controllers: [AppController, AutjController],
  providers: [AppService],
})
export class AppModule {}
