import {
    Controller,
    Get,
    Post,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Req,
    Res,
    Body,
    ValidationPipe,
    UsePipes,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  import { AuthService } from '../services/auth.service';

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(
      @Body() body,
      @Res() res: Response,
    ) {
      const isAuthenticated = this.authService.authUser(body.name, body.password);
      if (isAuthenticated) {
        res.status(200).send({ user: body.name });
      } else {
        res.status(400).send({ msg: 'user not found!' });
      }
    }
  }
