import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  isConnected:boolean
  router: Router;
  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.isConnected = true
    } else {
      this.isConnected = false
    }
    
  }
   disconnect() {
     localStorage.removeItem('token')
     //this.isConnected = false
     this.router.navigate(["/login"]);
     
   }
}
