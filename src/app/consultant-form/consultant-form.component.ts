import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConsultantService } from "../consultant.service";
import { ActivatedRoute } from "@angular/router";
import Consultant from "../consultant-component/consultant";

@Component({
  selector: "app-consultant-form",
  templateUrl: "./consultant-form.component.html",
  styleUrls: ["./consultant-form.component.css"]
})
export class ConsultantFormComponent implements OnInit {
  idCtrl: FormControl;
  nameCtrl: FormControl;
  surnameCtrl: FormControl;
  descriptionCtrl: FormControl;
  consultantForm: FormGroup;
  consultantService: ConsultantService;
  route: ActivatedRoute;
  consultant: Consultant;
  constructor(fb: FormBuilder, consultantService: ConsultantService, route: ActivatedRoute) {
    this.route = route;

    this.consultantService = consultantService;
    this.idCtrl = fb.control("");
    this.nameCtrl = fb.control("", [Validators.required]);
    this.surnameCtrl = fb.control("", [Validators.required]);
    this.descriptionCtrl = fb.control("", [Validators.required]);
    this.consultantForm = fb.group({
      id: this.idCtrl,
      name: this.nameCtrl,
      surname: this.surnameCtrl,
      description: this.descriptionCtrl
    });

    const id = +this.route.snapshot.paramMap.get("id");
    if (id !== 0) {
      this.consultantService.getConsultant(id).subscribe(res => {
        this.consultant = res;
        this.idCtrl.setValue(res.id);
        this.nameCtrl.setValue(res.name);
        this.surnameCtrl.setValue(res.surname);
        this.descriptionCtrl.setValue(res.description);
      });
    }
  }

  ngOnInit() {}

  add() {
    if (this.consultant != null) {
      let consultant = new Consultant(
        this.consultantForm.value.id,
        this.consultantForm.value.name,
        this.consultantForm.value.surname,
        this.consultantForm.value.description
      );
      this.consultantService.edit(consultant);
    } else {
      let data = this.consultantForm.value;
      delete data["id"];
      this.consultantService.add(data);
    }
  }
}
