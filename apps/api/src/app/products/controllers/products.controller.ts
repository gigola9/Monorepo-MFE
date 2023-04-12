import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('getProducts')
  getAllProducts() {
    return this.productsService.getProducts();
  }
}
