import {Injectable} from '@angular/core';
import {CustomHttpService} from './http.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FetcherService {

  private parfums = 'assets/jsons/parfums.json';
  private productDetails = 'https://beautyscrapr.herokuapp.com/price?url=';

  constructor(private http: CustomHttpService) {
  }

  getParfums() {
    return this.http.get(this.parfums)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not fetch parfums'));
  }

  getProductDetails(url) {
    const newUrl = this.productDetails + url;
    return this.http.get(newUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not fetch product details'));
  }


}
