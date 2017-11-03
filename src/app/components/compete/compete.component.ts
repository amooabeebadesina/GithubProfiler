import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-compete',
  templateUrl: './compete.component.html',
  styleUrls: ['./compete.component.css']
})
export class CompeteComponent implements OnInit {

  display_error = {
    first: false,
    second: false
  };
  first_user: any;
  second_user: any;
  winner: any;

  constructor(private alertService: AlertService,
              private githubService: GithubService) { }

  ngOnInit() {
  }

  successAlert() {
    const data = {
      'title': this.winner.login + ' won',
      'info': null
    };
    this.alertService.success(data);
  }

  onSubmit(form) {
    const first = this.calculatePoint(this.first_user);
    const second = this.calculatePoint(this.second_user);
    this.winner = first > second ? this.first_user : this.second_user;
    this.successAlert();
  }

  resetErrorMessage() {
    this.display_error = {
      first: false,
      second: false
    };
  }

  fetchFirstUser(username) {
    this.resetErrorMessage();
    this.alertService.showLoader();
    this.githubService.getUser(username)
      .subscribe((res) => {
        this.first_user = res.json();
      }, (err) => {
        this.display_error.first = true;
        this.alertService.hideLoader();
      }, () => {
        this.alertService.hideLoader();
      });
  }

  fetchSecondUser(username) {
    this.resetErrorMessage();
    this.alertService.showLoader();
    this.githubService.getUser(username)
      .subscribe((res) => {
        this.second_user = res.json();
      }, (err) => {
        this.display_error.second = true;
        this.alertService.hideLoader();
      }, () => {
        this.alertService.hideLoader();
      });
  }

  calculatePoint(data) {
    const total = data.public_repos + data.public_gists + data.followers + data.following;
    return total;
  }

}
