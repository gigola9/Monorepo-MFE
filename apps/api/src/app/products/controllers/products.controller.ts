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
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // @Get(':id')
  // getCostumer(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   const customer = this.customerService.findCustomer(id);
  //   if (customer) {
  //     res.send(customer);
  //   } else {
  //     res.status(400).send({ msg: 'Customer not found!' });
  //   }
  // }

  // @Get('/search/:id')
  // searchCustomerById(@Param('id', ParseIntPipe) id: number) {
  //   const customer = this.customerService.findCustomer(id);
  //   if (customer) return customer;
  //   else throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
  // }

  // @Get('')
  // getAllCustomers() {
  //   return this.customerService.getCustomers();
  // }

  // @Post('create')
  // @UsePipes(ValidationPipe)
  // createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
  //   this.customerService.createCustomer(createCustomerDto);
  // }
}
