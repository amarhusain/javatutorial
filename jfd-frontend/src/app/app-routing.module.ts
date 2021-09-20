import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', component:home component},
  { path: "signup",  component: SignupComponent} 
  { path: "login",  component: login component} 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "**",  component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
