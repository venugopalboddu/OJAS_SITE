import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
