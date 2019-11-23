import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
   constructor(private fb: FormBuilder, private router: Router, private s: ContactService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get cf() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.contactForm.invalid) {
      return;
    }
    alert('You message has been successfully sent.');
    // this.s.postData(this.contactForm.value).subscribe((res) => {
    //   console.log(res);
    // });

  }


  model: any = { };

  loginSubmit(f: NgForm) {
    alert('Login successfully :-)\n\n' + JSON.stringify(this.model));
    console.log(this.model);
    f.resetForm();
  }

}
