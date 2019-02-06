import { ConsultantFormComponent } from "./consultant-form/consultant-form.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartupComponentComponent } from './startup-component/startup-component.component';
import { ConsultantComponentComponent } from './consultant-component/consultant-component.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { StartupFormComponent } from './startup-form/startup-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'consultants', component: ConsultantComponentComponent},
  { path: 'startups', component: StartupComponentComponent },
  { path: 'startup', component: StartupFormComponent },
  { path: 'startup/:id', component: StartupFormComponent },
  { path: 'page404', component: Page404Component }
 
  { path: "consultant/:id", component: ConsultantFormComponent },
  { path: "consultant", component: ConsultantFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
