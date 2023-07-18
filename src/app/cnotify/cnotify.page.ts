import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnotify',
  templateUrl: './cnotify.page.html',
  styleUrls: ['./cnotify.page.scss'],
})
export class CNotifyPage implements OnInit {

  constructor() { }

  public form = {
    ClientID: "",
    Email: "",
    Fullname: "",
    RefNumber: "",
    Amount: ""
  }

 

  ngOnInit() {
  }
  print() {
    console.log(this.form)
  }
}
