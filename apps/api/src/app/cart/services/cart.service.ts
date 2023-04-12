import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {

  items = [];

  addItemToCart(item) {
    if (item) {
      if (this.items.length == 0) {
        this.items.push({ ...item, quantity: 1 });
      } else {
        const findItem = this.items.find(m => m.name == item.name);
        if (findItem) {
          findItem.quantity++;
        } else {
          this.items.push({ ...item, quantity: 1 });
        }
      }
      return true;
    } else {
      return false;
    }
  }

  getCartItems() {
    return this.items;
  }
}
