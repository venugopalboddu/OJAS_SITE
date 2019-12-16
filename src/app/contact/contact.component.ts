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
  msg:any;
  status1: boolean = false;
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
    let contactDetails = {
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value,
      message: this.contactForm.controls['message'].value
    }

    if (this.contactForm.invalid) {
      return;
    }
    this.s.postData(contactDetails).subscribe((res) => {
      console.log(res);
    });
    this.msg = "You message has been sent successfully. We will get back to you soon!";
    this.contactForm.reset();
    this.submitted = false;
    this.status1 = true;
  }
  model: any = { };

  loginSubmit(f: NgForm) {
    alert('Login successfully :-)\n\n' + JSON.stringify(this.model));
    console.log(this.model);
    f.resetForm();
  }

}
