import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { UserComponent  } from './user.component';
 
 
const routes: Routes = [
    { path: 'list', component: UserComponent},
    { path: '', redirectTo:'list'},
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }