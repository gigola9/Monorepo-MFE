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
import { CartService } from '../services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post('addItem')
  login(
    @Body() body,
    @Res() res: Response,
  ) {
    const itemAdded = this.cartService.addItemToCart(body.item);
    if (itemAdded) {
      res.status(200).send({ msg: 'success' });
    } else {
      res.status(400).send({ msg: 'error!' });
    }
  }

  @Get('getItems')
  getItems() {
    return this.cartService.getCartItems();
  }
}
