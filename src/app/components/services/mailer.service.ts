import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MailerService {

  constructor(private http: Http) {}
  sendEmail(firstName, lastName, hour, passagers) {
    const mailAddress = `https://beautyscrapr.herokuapp.com/mailer?firstName=${firstName}&lastName=${lastName}&hour=${hour}&passagers=${passagers}`;
    return this.http.get(mailAddress)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error,could not send the email'));
  }
}
