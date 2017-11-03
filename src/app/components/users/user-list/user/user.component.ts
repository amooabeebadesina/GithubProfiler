import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
