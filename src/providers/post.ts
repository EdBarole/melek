/**
 * Provider simplifies interaction with API.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { IPost } from '../interfaces/post';

@Injectable()
export class PostService {

  private baseUrl: string = "http://localhost:8000/api";
  private apiEndpoint: string = this.baseUrl + "/posts";

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
   * @return Observable<IPost>
   */
  public fetchById(id: number): Observable<IPost> {
    return this.httpClient
      .get(this.apiEndpoint + '/' + id)
      .map(response => {
        return new IPost(response);
      })
      .catch((e) => {
        // console.error(e);
        return Observable.throw(e);
      });
  }

}
