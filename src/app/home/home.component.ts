import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Startup from '../startup-component/startup';
import { StartupService } from '../startup.service';
import Consultant from '../consultant-component/consultant';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  startups: Observable<Startup[]>;
  startupService: StartupService;
  consultants: Observable<Consultant[]>;
  consultantService: ConsultantService;
  constructor(startupService:StartupService, consultantService: ConsultantService) { 
    this.startupService = startupService;
    this.consultantService = consultantService;
  }

  ngOnInit() {
    this.startups = this.startupService.getStartups();
    this.consultants = this.consultantService.getConsultants();
  }

}
