import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  passwordType: string = 'password';
  passwordShown: boolean = false;
  eyeType: string = 'fa-solid fa-eye'
 
  constructor( private router: Router) {}

  goToClient(){

    this.router.navigate(['/dashboard'])
  }

  goToAgent(){

    this.router.navigate(['/dashboard2'])
  }

  public form = {
    email: "",
    password: ""
  }


  public togglePassword(){
    if(this.passwordShown == true){
      this.passwordShown = false;
      this.passwordType = 'password';
      this.eyeType = 'fa-solid fa-eye';
    }else{
      this.passwordShown = true;
      this.passwordType = 'text'
      this.eyeType = 'fa-solid fa-eye-slash';
    }
  }


  ngOnInit() { }
  print() {
    console.log(this.form)
  }
 
  }





