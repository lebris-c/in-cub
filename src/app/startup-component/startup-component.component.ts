import { Component, OnInit } from "@angular/core";
import Startup from "./startup";
import { HttpClient } from "@angular/common/http";
import { StartupService } from "../startup.service";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { AddressPipe } from "../address.pipe";
import { CofounderPipe } from "../cofounder.pipe";
import { Router } from "@angular/router";

@Component({
  selector: "app-startup-component",
  templateUrl: "./startup-component.component.html",
  styleUrls: ["./startup-component.component.css"]
})
export class StartupComponentComponent implements OnInit {
  Http: HttpClient;
  Startups: Observable<Startup[]>;
  startupService: StartupService;
  dataSource: StartupDataSource;
  router: Router;
  displayedColumns = [
    "name",
    "activity",
    "official",
    "nbCofounder",
    "description",
    "address",
    "consultant",
    "actions"
  ];
  addressPipe: AddressPipe;
  cofounderPipe: CofounderPipe;
  constructor(
    http: HttpClient,
    startupService: StartupService,
    addressPipe: AddressPipe,
    router: Router
  ) {
    this.router = router;
    this.startupService = startupService;
    this.dataSource = new StartupDataSource(this.startupService);
    this.Http = http;
    this.addressPipe = addressPipe;
    this.cofounderPipe = this.cofounderPipe;
  }

  ngOnInit() {
    this.Startups = this.startupService.getStartups();
  }

  delete(id) {
    this.startupService.delete(id).subscribe(res => {
      this.router.navigate(["/startups"]);
    });
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
