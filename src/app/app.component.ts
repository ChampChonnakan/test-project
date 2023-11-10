import { Component } from '@angular/core';
import { Product } from './shopping/model/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.http.get<Product[]>('/api/product/').subscribe((response) => {
      // console.log(response);
      this.product = response;
      this.filterProduct = this.product;
    });
  }

  title = 'primng';
  product: Product[] = []

  filterProduct: Product[] = [];

  searchProduct(name: String) {
    console.log(name);
    this.filterProduct = this.product.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchName = name.toLocaleLowerCase();
      return productName.indexOf(searchName) !== -1;
    });
  }
}
