import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GithubService} from '../../../services/github.service';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  displayError = false;

  constructor(private githubService: GithubService,
              private route: ActivatedRoute,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.alertService.showLoader();
    const params = {page: 2, per_page: 20};
    this.githubService.getUsers(params)
      .subscribe((res) => {
        this.users = res.json();
        this.alertService.hideLoader();
      }, (err) => {
        const data = {
          'title': 'Network Failure',
          'info': 'Please check your Internet Connection'
        };
        this.alertService.error(data);
      });
  }

  loadDetail(username: string) {
    this.router.navigate([username], {relativeTo: this.route});
  }

}
