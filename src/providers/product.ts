/**
 * Provider simplifies interaction with API.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { IProduct } from '../interfaces/product';

@Injectable()
export class ProductService {

  private baseUrl: string = "http://localhost:8000/api";
  private apiEndpoint: string = this.baseUrl + "/brands";

  constructor(public httpClient: HttpClient) { }

  /**
   * Method returns resource array.
   * 
   * @param endpoint String
   * @return Observable[]
   */
  public fetch() {
    return this.httpClient
      .get(this.apiEndpoint)
      .map(response => {
        // console.log(response);
        return response;
      })
      .catch((e) => {
        // console.error(e);
        return Observable.throw(e);
      });
  }

  /**
   * Method returns a resource referenced by id.
   * 
   * @param id Number
   * @return Observable<IProduct>
   */
  public fetchById(id: number): Observable<IProduct> {
    return this.httpClient
      .get(this.apiEndpoint + '/' + id)
      .map(response => {
        return new IProduct(response);
      })
      .catch((e) => {
        // console.error(e);
        return Observable.throw(e);
      });
  }

  /**
   * Method creates a new resource.
   * 
   * @param product IProduct
   * @return IProduct
   */
  public create(product: IProduct): Observable<IProduct> {
    return this.httpClient
      .post(this.apiEndpoint, product)
      .map(response => {
        return new IProduct(response);
      })
      .catch((e) => {
        // console.log(e);
        return Observable.throw(e);
      });
  }

  /**
   * Method updates resource referenced by id.
   * 
   * @param product IProduct
   * @return IProduct
   */
  public update(product: IProduct): Observable<IProduct> {
    return this.httpClient
      .put(this.apiEndpoint + '/' + product.id, product)
      .map(response => {
        return new IProduct(response);
      })
      .catch((e) => {
        console.log(e);
        return Observable.throw(e);
      });
  }

  /**
   * Method deletes resource referenced by id.
   * 
   * @param id Number
   * @return void
   */
  public deleteById(id: number) {
    return this.httpClient
      .delete(this.apiEndpoint + '/' + id)
      .catch((e) => {
        console.log(e);
        return Observable.throw(e);
      });
  }

}
