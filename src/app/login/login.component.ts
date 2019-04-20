import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import User from '../user/user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isConnected:boolean
  nameCtrl: FormControl;
  passwordCtrl: FormControl;
  user: User;
  userService: UserService;
  users: Observable<User[]>;
  route: ActivatedRoute;
  router: Router;
  loginForm: FormGroup;
  notifier: NotifierService;
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
    this.nameCtrl = fb.control("");
    this.passwordCtrl = fb.control("")
    this.loginForm = fb.group({
      name: this.nameCtrl,
      password: this.passwordCtrl
    });


  }

  ngOnInit() {
  }

  connect() {
    let name = this.loginForm.value.name
    let pwd = this.loginForm.value.password
    console.log(name)
    console.log(pwd)
    this.userService.connect(this.loginForm.value).subscribe(
      data => {
        console.log(data)
        localStorage.setItem('token', data['token']);
        this.notifier.notify("success", "Connexion réussie");
        this.router.navigate(["/home"]);
      },
      error => {
        console.log(error)
        this.notifier.notify("error", "Erreur lors de la connexion")
      }
    )
  }

}
