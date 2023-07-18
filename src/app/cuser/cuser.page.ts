import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cuser',
  templateUrl: './cuser.page.html',
  styleUrls: ['./cuser.page.scss'],
})
export class CUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigate(['/home'])

  }
}
