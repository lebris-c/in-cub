import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartupComponentComponent } from './startup-component/startup-component.component';
import { ConsultantComponentComponent } from './consultant-component/consultant-component.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule, MatTableModule, MatCardModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api"
import { InMemoryDataService } from './in-memory-data.service';
import { ConsultantFormComponent } from './consultant-form/consultant-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponentComponent,
    ConsultantComponentComponent,
    HomeComponent,
    Page404Component,
    TopMenuComponent,
    ConsultantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
