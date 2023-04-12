import { Injectable } from '@nestjs/common';
import { Item } from '@store/data';

@Injectable()
export class ProductsService {
  getProducts() {
    const products: Item[] = [
      {
        id: 1,
        name: 'mi electric scooter pro 2',
        description: 'The battery is safe and durable with a capacity of 446Wh. Acceleration is fast reaching a maximum speed of 25km/h.',
        price: 1669,
        quantity: 24,
        imageUrl: 'https://xiaomi.com.ge/wp-content/uploads/2020/10/patinete__xiaomi_mi_electric__scooter__pro__2_negro_01_l.jpg'
      },
      {
        id: 2,
        name: 'iPhone 14 Pro',
        description: 'Apple iPhone 14 Pro 128GB Deep Purple',
        price: 3455,
        quantity: 87,
        imageUrl: 'https://img.zoommer.ge/zoommer-images/thumbs/0182335_apple-iphone-14-pro-128gb-deep-purple_550.jpeg'
      },
      {
        id: 1,
        name: 'mi electric scooter pro 2',
        description: 'The battery is safe and durable with a capacity of 446Wh. Acceleration is fast reaching a maximum speed of 25km/h.',
        price: 1669,
        quantity: 24,
        imageUrl: 'https://xiaomi.com.ge/wp-content/uploads/2020/10/patinete__xiaomi_mi_electric__scooter__pro__2_negro_01_l.jpg'
      },
      {
        id: 2,
        name: 'iPhone 14 Pro',
        description: 'Apple iPhone 14 Pro 128GB Deep Purple',
        price: 3455,
        quantity: 87,
        imageUrl: 'https://img.zoommer.ge/zoommer-images/thumbs/0182335_apple-iphone-14-pro-128gb-deep-purple_550.jpeg'
      },
      {
        id: 1,
        name: 'mi electric scooter pro 2',
        description: 'The battery is safe and durable with a capacity of 446Wh. Acceleration is fast reaching a maximum speed of 25km/h.',
        price: 1669,
        quantity: 24,
        imageUrl: 'https://xiaomi.com.ge/wp-content/uploads/2020/10/patinete__xiaomi_mi_electric__scooter__pro__2_negro_01_l.jpg'
      },
      {
        id: 2,
        name: 'iPhone 14 Pro',
        description: 'Apple iPhone 14 Pro 128GB Deep Purple',
        price: 3455,
        quantity: 87,
        imageUrl: 'https://img.zoommer.ge/zoommer-images/thumbs/0182335_apple-iphone-14-pro-128gb-deep-purple_550.jpeg'
      },
      {
        id: 1,
        name: 'mi electric scooter pro 2',
        description: 'The battery is safe and durable with a capacity of 446Wh. Acceleration is fast reaching a maximum speed of 25km/h.',
        price: 1669,
        quantity: 24,
        imageUrl: 'https://xiaomi.com.ge/wp-content/uploads/2020/10/patinete__xiaomi_mi_electric__scooter__pro__2_negro_01_l.jpg'
      },
      {
        id: 2,
        name: 'iPhone 14 Pro',
        description: 'Apple iPhone 14 Pro 128GB Deep Purple',
        price: 3455,
        quantity: 87,
        imageUrl: 'https://img.zoommer.ge/zoommer-images/thumbs/0182335_apple-iphone-14-pro-128gb-deep-purple_550.jpeg'
      },
      {
        id: 1,
        name: 'mi electric scooter pro 2',
        description: 'The battery is safe and durable with a capacity of 446Wh. Acceleration is fast reaching a maximum speed of 25km/h.',
        price: 1669,
        quantity: 24,
        imageUrl: 'https://xiaomi.com.ge/wp-content/uploads/2020/10/patinete__xiaomi_mi_electric__scooter__pro__2_negro_01_l.jpg'
      },
      {
        id: 2,
        name: 'iPhone 14 Pro',
        description: 'Apple iPhone 14 Pro 128GB Deep Purple',
        price: 3455,
        quantity: 87,
        imageUrl: 'https://img.zoommer.ge/zoommer-images/thumbs/0182335_apple-iphone-14-pro-128gb-deep-purple_550.jpeg'
      }
    ];
    return products;
  }
}
