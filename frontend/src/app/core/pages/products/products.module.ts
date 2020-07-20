import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { LoaderComponent } from '../../components/loader/loader.component';

@NgModule({
  declarations: [ProductsComponent, LoaderComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
