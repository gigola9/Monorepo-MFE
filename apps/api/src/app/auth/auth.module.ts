import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
