import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model: any = { };

  loginSubmit(f: NgForm) {
    alert('Login successfully :-)\n\n' + JSON.stringify(this.model));
    console.log(this.model);
    f.resetForm();
  }

}
