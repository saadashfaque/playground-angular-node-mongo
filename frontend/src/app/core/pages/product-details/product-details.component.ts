import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: any;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.fetchProducts();
  }

  fetchProducts() {
    this.api.get(`/products/${this.id}`, {}).then((data) => {
      this.product = data;
    });
  }
}
