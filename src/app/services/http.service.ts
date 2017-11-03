import { Injectable } from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  headers() {
    const headers = new Headers();
    return  new RequestOptions(headers);
  }

  get(url, options = this.headers()) {
    return this.http.get(url, options);
  }

  getPaginate(url, params, options = this.headers()) {
    const request_params = new URLSearchParams();
    request_params.set('page', params.page);
    request_params.set('per_page', params.per_page);
    options.params = request_params;
    return this.http.get(url, options);
  }

  post(url, data, options = this.headers()) {
    return this.http.post(url, data, options);
  }

}
