import { Component, OnInit } from '@angular/core';
import Startup from './startup';
import { HttpClient } from '@angular/common/http';
import { StartupService } from '../startup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-startup-component',
  templateUrl: './startup-component.component.html',
  styleUrls: ['./startup-component.component.css']
})
export class StartupComponentComponent implements OnInit {
  Http: HttpClient;
  Startups: Observable<Startup[]>
  startupService: StartupService
  constructor( http: HttpClient, startupService: StartupService ) { 
    this.startupService = startupService
    this.Http = http
  }

  ngOnInit() {
    this.Startups = this.startupService.getStartups()
  }

}
