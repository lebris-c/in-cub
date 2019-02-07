import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StartupComponentComponent } from "./startup-component/startup-component.component";
import { ConsultantComponentComponent } from "./consultant-component/consultant-component.component";
import { HomeComponent } from "./home/home.component";
import { Page404Component } from "./page404/page404.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MatMenuModule } from "@angular/material/menu";
import {
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatFormFieldModule,
  MatDividerModule,
  MatSelectModule,
  MatTooltipModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { ConsultantFormComponent } from "./consultant-form/consultant-form.component";
import { AddressPipe } from "./address.pipe";
import { StartupFormComponent } from "./startup-form/startup-form.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CofounderPipe } from "./cofounder.pipe";
import { NotifierModule } from "angular-notifier";
import { UserComponent } from "./user/user.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { httpInterceptorProviders } from "./http-interceptors";

@NgModule({
  declarations: [
    AppComponent,
    StartupComponentComponent,
    ConsultantComponentComponent,
    HomeComponent,
    Page404Component,
    TopMenuComponent,
    ConsultantFormComponent,
    AddressPipe,
    StartupFormComponent,
    CofounderPipe,
    UserComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatOptionModule,
    MatFormFieldModule,
    MatDividerModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    NotifierModule,
    MatSelectModule,
    MatTooltipModule
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [AddressPipe, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
