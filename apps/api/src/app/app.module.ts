import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    AuthModule,
    CartModule,
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
