import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '@store/data';

@Component({
  selector: 'store-products-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class RemoteEntryComponent implements OnInit {

  products: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get('/api/products/getProducts').subscribe((m: any) => {
     this.products = m;
    });
  }

  buy(item: any) {
    this.http.post('/api/cart/addItem', { item }).subscribe((m: any) => {
      console.log(m);
     });
  }
}
