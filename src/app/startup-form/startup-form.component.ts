import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StartupService } from '../startup.service';
import { ActivatedRoute } from '@angular/router';
import Startup from '../startup-component/startup';
import { ConsultantService } from '../consultant.service';
import { Observable } from 'rxjs';
import Consultant from '../consultant-component/consultant';
import { validateBasis } from '@angular/flex-layout';

@Component({
  selector: 'app-startup-form',
  templateUrl: './startup-form.component.html',
  styleUrls: ['./startup-form.component.css']
})
export class StartupFormComponent implements OnInit {
  idCtrl: FormControl;
  nameCtrl: FormControl;
  activityCtrl: FormControl;
  officialCtrl: FormControl;
  nbCofounderCtrl: FormControl;
  descriptionCtrl: FormControl;
  addressCtrl: FormControl;
  consultantCtrl: FormControl;
  startupForm: FormGroup;
  startupService: StartupService;
  route: ActivatedRoute;
  startup: Startup;
  consultants: Observable<Consultant[]>
  // Liste des consultants 
  consultantService: ConsultantService;
  constructor(fb: FormBuilder, startupService: StartupService, route: ActivatedRoute, consultantService: ConsultantService) { 
    this.consultantService = consultantService;
    this.route = route;
    this.startupService = startupService;
    this.idCtrl = fb.control("");
    this.nameCtrl = fb.control("", [
      Validators.required,
      Validators.maxLength(20)
    ]);
    this.activityCtrl = fb.control("", [
      Validators.required,
      Validators.maxLength(10)
    ]);
    this.officialCtrl = fb.control("", [
      Validators.required,
      Validators.maxLength(15)
    ]);
    this.nbCofounderCtrl = fb.control("",[
      Validators.required
    ]);
    this.descriptionCtrl = fb.control("", [
      Validators.maxLength(250)
    ]);
    this.addressCtrl = fb.control("", [
      Validators.maxLength(25)
    ]);
    this.consultantCtrl = fb.control("")
    this.startupForm = fb.group({
      id: this.idCtrl,
      name: this.nameCtrl,
      activity: this.activityCtrl,
      official: this.officialCtrl,
      nbCofounder: this.nbCofounderCtrl,
      description: this.descriptionCtrl,
      address: this.addressCtrl,
      consultant: this.consultantCtrl
    });

    const id =+ this.route.snapshot.paramMap.get("id");
    if (id !== 0) {
      this.startupService.getStartup(id).subscribe(res => {
        this.startup = res;
        this.idCtrl.setValue(res.id);
        this.nameCtrl.setValue(res.name);
        this.activityCtrl.setValue(res.activity);
        this.officialCtrl.setValue(res.official);
        this.nbCofounderCtrl.setValue(res.nbCofounder);
        this.descriptionCtrl.setValue(res.description);
        this.addressCtrl.setValue(res.address);
        this.consultantCtrl.setValue(res.consultant);
      });
    }
  }
  ngOnInit() {
    this.consultants = this.consultantService.getConsultants()
  }

  add() {
    if (this.startup != null) {
      let startup = new Startup(
        this.startupForm.value.id,
        this.startupForm.value.name,
        this.startupForm.value.activity,
        this.startupForm.value.official,
        this.startupForm.value.nbCofounder,
        this.startupForm.value.description,
        this.startupForm.value.address,
        this.startupForm.value.consultant
      );
      this.startupService.edit(startup);
    } else {
      let data = this.startupForm.value;
      delete data["id"];
      this.startupService.add(data)
    }
  }
}
