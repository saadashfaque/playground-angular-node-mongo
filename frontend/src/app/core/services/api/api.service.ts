import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get(path: string, params: any) {
    return this.httpClient
      .get(`${environment.api}${path}`, { params })
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  post(path: string, params: any) {
    return this.httpClient
      .post(`${environment.api}${path}`, { params })
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
