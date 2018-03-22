import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  baseUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  
  // console.log('Hello RestProvider Provider');

  // Sending a GET request to /products
  public getProducts(): Observable<Product[]> {
    return this.httpClient
      .get(this.baseUrl + '/products')
      .map(products => {
        // return products.map((product) => new Product(product));
        console.log(products);
        return products;
      })
      .catch((e) => {
        // console.error(e);
        return Observable.throw(e);
      });
  }

  // Sending a POST request to /products
  public createProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post(this.baseUrl + '/products', product)
      .map(response => {
        return new Product(response);
      })
      .catch((e) => {
        console.log(e);
        return Observable.throw(e);
      });
  }

  // Sending a GET request to /products/:id
  public getProductById(productId: number): Observable<Product> {
    return this.httpClient
      .get(this.baseUrl + '/products/' + productId)
      .map(response => {
        return new Product(response);
      })
      .catch((e) => {
        console.error(e);
        return Observable.throw(e);
      });
  }

  // Sending a PUT request to /products/:id
  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient
      .put(this.baseUrl + '/products/' + product.id, product)
      .map(response => {
        return new Product(response);
      })
      .catch((e) => {
        console.log(e);
        return Observable.throw(e);
      });
  }

  // Sending a DELETE request to /products/:id
  public deleteProductById(productId: number) {
    return this.httpClient
      .delete(this.baseUrl + '/products/' + productId)
      .catch((e) => {
        console.log(e);
        return Observable.throw(e);
      });
  }

}
