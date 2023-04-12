import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '@store/data';

@Component({
  selector: 'store-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get('/api/cart/getItems').subscribe((m: any[]) => {
     this.products = m;
    });
  }

  addQuantity(item) {
    item.quantity++;
  }

  removeQuantity(item) {
    item.quantity--;
    if (item.quantity == 0) {
      this.products = this.products.filter(m => m.quantity > 0);
    }
  }
}
