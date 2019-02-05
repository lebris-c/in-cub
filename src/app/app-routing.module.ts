import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartupComponentComponent } from './startup-component/startup-component.component';
import { ConsultantComponentComponent } from './consultant-component/consultant-component.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'consultants', component: ConsultantComponentComponent},
  { path: 'startups', component: StartupComponentComponent},
  { path: 'page404', component: Page404Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
