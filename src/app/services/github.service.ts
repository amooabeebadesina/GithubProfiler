import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {CONSTANTS} from '../common/constants';

@Injectable()
export class GithubService {

  constructor( private httpService: HttpService) { }

  getUsers(params) {
    return this.httpService.getPaginate(CONSTANTS.USERS, params);
  }

  getUser(username) {
    const url = CONSTANTS.USERS + '/' + username;
    return this.httpService.get(url);
  }

}
