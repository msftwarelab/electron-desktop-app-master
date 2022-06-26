import {Injectable} from '@angular/core';
import {CustomHttpService} from './http.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TranslatorService {

  private translateUrl = 'https://beautyscrapr.herokuapp.com/translate';

  constructor(private http: CustomHttpService) {
  }

  translateContent(description: string, language: string) {
    return this.http.post(this.translateUrl, {description, language})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw('Server error,could not translate the description'));
  }
}
