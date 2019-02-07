import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import User from '../user/user';
import { UserService } from '../user.service';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  idCtrl: FormControl;
  nameCtrl: FormControl;
  passwordCtrl: FormControl;
  user: User;
  userService: UserService;
  notifier: NotifierService;
  users: Observable<User[]>;
  route: ActivatedRoute;
  router: Router;
  registerForm: FormGroup;
  constructor(
    fb: FormBuilder,
    userService: UserService,
    route: ActivatedRoute,
    notifierService: NotifierService,
    router: Router
  ) { 
    this.notifier = notifierService;
    this.router = router;
    this.userService = userService;
    this.route = route;
    this.idCtrl = fb.control("");
    this.nameCtrl = fb.control("");
    this.passwordCtrl = fb.control("");
    this.registerForm = fb.group({
      id: this.idCtrl,
      name: this.nameCtrl,
      password: this.passwordCtrl
    });

    const id = +this.route.snapshot.paramMap.get("id");
    if (id !== 0) {
      this.userService.getUser(id).subscribe( res => {
        this.user = res;
        this.idCtrl.setValue(res._id);
        this.nameCtrl.setValue(res.name);
        this.passwordCtrl.setValue(res.password);
      })
    }
  }

  ngOnInit() {
  }

  add() {
    if(this.user != null) {
      let user = new User(
        this.registerForm.value.id,
        this.registerForm.value.name,
        this.registerForm.value.password
      );
      this.notifier.notify("error", "L'utilisateur existe déjà.");
    } else {
      let data= this.registerForm.value;
      delete data["id"];
      this.userService.add(data).subscribe(
        data => {
          this.notifier.notify("success", "Incription réussie");
          this.router.navigate(["/home"]);
        },
        error => {
          this.notifier.notify("error", "Erreur lors de l'inscription")
        }
      )
    }
  }

}
