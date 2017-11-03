import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user-list/user/user.component';
import { FilterComponent } from './components/users/user-list/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import {GithubService} from './services/github.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpService} from './services/http.service';
import {HttpModule} from '@angular/http';
import { RandomColorDirective } from './directives/random-color.directive';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { CompeteComponent } from './components/compete/compete.component';
import {AlertService} from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    FilterComponent,
    HomeComponent,
    RandomColorDirective,
    UserDetailComponent,
    UserListComponent,
    CompeteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GithubService, HttpService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
