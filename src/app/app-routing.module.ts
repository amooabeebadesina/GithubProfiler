
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {NgModule} from '@angular/core';
import {UserDetailComponent} from './components/users/user-detail/user-detail.component';
import {UserListComponent} from './components/users/user-list/user-list.component';
import {CompeteComponent} from './components/compete/compete.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    { path: '', component: UserListComponent},
    { path: ':username', component: UserDetailComponent},
    { path: ':/country', component: UsersComponent}
  ]},
  {path: 'compete', component: CompeteComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
