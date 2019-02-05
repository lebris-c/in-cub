import { Component, OnInit } from '@angular/core';
import Startup from './startup';
import { HttpClient } from '@angular/common/http';
import { StartupService } from '../startup.service';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-startup-component',
  templateUrl: './startup-component.component.html',
  styleUrls: ['./startup-component.component.css']
})
export class StartupComponentComponent implements OnInit {
  Http: HttpClient;
  Startups: Observable<Startup[]>
  startupService: StartupService
  dataSource : StartupDataSource
  displayedColumns = ['name', 'activity', 'official', 'nbCofounder', 'description', 'adress']
  constructor( http: HttpClient, startupService: StartupService ) { 
    this.startupService = startupService
    this.dataSource = new StartupDataSource(this.startupService);
    this.Http = http
  }

  ngOnInit() {
    this.Startups = this.startupService.getStartups()
  }

}

export class StartupDataSource extends DataSource<any> {
  constructor(private startupService: StartupService) {
    super();
  }
  connect(): Observable<Startup[]> {
    return this.startupService.getStartups();
  }
  disconnect() {}
}
