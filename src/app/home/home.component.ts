import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
