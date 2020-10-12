import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ListComponent } from './list/list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
{path: '', component: SignInComponent},
{path: 'sign-up', component: SignUpComponent},
{path: 'sign-in', component: SignInComponent },
{path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
{path: 'listprofile/:id', component: ListPageComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
