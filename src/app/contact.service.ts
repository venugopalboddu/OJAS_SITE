import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private ht: HttpClient) { }

  postData(d) {
    return this.ht.post('https://venugopalboddu88.000webhostapp.com/venu_blog/mailer.php', d);
  }

}
