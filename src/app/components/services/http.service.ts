import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {DataBusService} from './data-bus.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CustomHttpService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions, private dataBus: DataBusService) {
    super(backend, options);
  }
  private onGetCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }
  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.dataBus.setDataLoadingStatus(true);
    return super.get(url, options)
      .catch(this.onGetCatch)
      .do((res: Response) => {
        console.log('do');
        return res;
      }, (error: any) => {
        Observable.throw(error);
      })
      .finally(() => {
        console.log('finally');
        this.dataBus.setDataLoadingStatus(false);
      });
  }
}
