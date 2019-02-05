import { Component, OnInit } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import Consultant from "./consultant";
import { ConsultantService } from "../consultant.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-consultant-component",
  templateUrl: "./consultant-component.component.html",
  styleUrls: ["./consultant-component.component.css"]
})
export class ConsultantComponentComponent implements OnInit {
  consultantService: ConsultantService;
  dataSource: ConsultantDataSource;
  displayedColumns = ["name", "surname", "description", "action"];
  constructor(consultantService: ConsultantService) {
    this.consultantService = consultantService;
    this.dataSource = new ConsultantDataSource(this.consultantService);
  }
  ngOnInit() {}
}

export class ConsultantDataSource extends DataSource<any> {
  constructor(private consultantService: ConsultantService) {
    super();
  }
  connect(): Observable<Consultant[]> {
    return this.consultantService.getConsultants();
  }
  disconnect() {}
}
