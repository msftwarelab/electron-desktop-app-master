import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class PaymentService {

  constructor(private http: Http) {
  }

  postPayment(amount, source, description) {
    const paymentUrl = 'https://beautyscrapr.herokuapp.com/charge';
    return this.http.post(paymentUrl, {amount, source, description});
  }

  createLead = (lead) => {
    const leadUrl = 'https://beauty-success-db.herokuapp.com/api/lead';
    return this.http.post(leadUrl, lead);
  }
}
