import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StartupService } from "../startup.service";
import { ActivatedRoute, Router } from "@angular/router";
import Startup from "../startup-component/startup";
import { ConsultantService } from "../consultant.service";
import { Observable } from "rxjs";
import Consultant from "../consultant-component/consultant";
import { validateBasis } from "@angular/flex-layout";
import { NotifierService } from "angular-notifier";
import { partition, find, map } from "rxjs/operators";

@Component({
  selector: "app-startup-form",
  templateUrl: "./startup-form.component.html",
  styleUrls: ["./startup-form.component.css"]
})
export class StartupFormComponent implements OnInit {
  _idCtrl: FormControl;
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
  consultants: Observable<Consultant[]>;
  notifier: NotifierService;
  router: Router;
  data: Consultant;
  selectedConsultant: number;
  // Liste des consultants
  consultantService: ConsultantService;
  constructor(
    fb: FormBuilder,
    startupService: StartupService,
    route: ActivatedRoute,
    consultantService: ConsultantService,
    notifierService: NotifierService,
    router: Router
  ) {
    this.notifier = notifierService;
    this.router = router;
    this.consultantService = consultantService;
    this.route = route;
    this.startupService = startupService;
    this._idCtrl = fb.control("");
    this.nameCtrl = fb.control("", [Validators.required, Validators.maxLength(20)]);
    this.activityCtrl = fb.control("", [Validators.required, Validators.maxLength(10)]);
    this.officialCtrl = fb.control("", [Validators.required, Validators.maxLength(15)]);
    this.nbCofounderCtrl = fb.control("", [Validators.required]);
    this.descriptionCtrl = fb.control("", [Validators.maxLength(250)]);
    this.addressCtrl = fb.control("", [Validators.maxLength(25)]);
    this.consultantCtrl = fb.control("");
    this.startupForm = fb.group({
      _id: this._idCtrl,
      name: this.nameCtrl,
      activity: this.activityCtrl,
      official: this.officialCtrl,
      nbCofounder: this.nbCofounderCtrl,
      description: this.descriptionCtrl,
      address: this.addressCtrl,
      consultant: this.consultantCtrl
    });

    const id = this.route.snapshot.paramMap.get("id");
    if (id != null) {
      this.startupService.getStartup(id).subscribe(res => {
        this.startup = res;
        this._idCtrl.setValue(res._id);
        this.nameCtrl.setValue(res.name);
        this.activityCtrl.setValue(res.activity);
        this.officialCtrl.setValue(res.official);
        this.nbCofounderCtrl.setValue(res.nbCofounder);
        this.descriptionCtrl.setValue(res.description);
        this.addressCtrl.setValue(res.address);
        this.selectedConsultant = res.consultant._id;
      });
    }
  }
  ngOnInit() {
    this.consultants = this.consultantService.getConsultants();
  }

  add() {
    if (this.startup != null) {
      let startup = new Startup(
        this.startupForm.value._id,
        this.startupForm.value.name,
        this.startupForm.value.activity,
        this.startupForm.value.official,
        this.startupForm.value.nbCofounder,
        this.startupForm.value.description,
        this.startupForm.value.address,
        this.startupForm.value.consultant
      );
      this.startupService.edit(startup).subscribe(
        data => {
          this.notifier.notify("success", "Modifier avec succès");
          this.router.navigate(["/startups"]);
        },
        error => {
          this.notifier.notify("error", "Erreur lors de la modification");
        }
      );
    } else {
      let data = this.startupForm.value;
      delete data["_id"];
      this.startupService.add(data).subscribe(
        data => {
          this.notifier.notify("success", "Ajouter avec succès");
          this.router.navigate(["/startups"]);
        },
        error => {
          this.notifier.notify("error", "Erreur lors de l'ajout");
        }
      );
    }
  }
}
