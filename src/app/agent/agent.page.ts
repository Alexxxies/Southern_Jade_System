import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {


  constructor( private router: Router) { }

  goToAgent(){

    this.router.navigate(['/dashboard'])
  }

  public form = {
    agentID: "",
    email:"",
    fullname: "",
    username: "",
    newpassword:"",
    Cpassword:" "
  }


  ngOnInit() {
  }
  print() {
    console.log(this.form)
  }
}



