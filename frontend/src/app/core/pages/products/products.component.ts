import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.api.get('/products/', {}).then((data) => {
      this.products = data;
    });
  }

  filter(value: string) {
    if (value.trim() === '') {
      this.fetchProducts();
      return;
    }
    this.api.post(`/products/${value.trim()}`, {}).then((data) => {
      this.products = data;
    });
  }
}
