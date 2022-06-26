import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ElectronService} from '../../providers/electron.service';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {

  firstName: any;
  lastName: any;
  travelers: any;

  constructor(private route: ActivatedRoute,
              private router: Router, public electronService: ElectronService) {
    if (electronService.isElectron()) {
      console.log(electronService.childProcess);
      console.log(electronService.ipcRenderer);
    } else {
      console.log('Mode web');
    }
  }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        this.firstName = params['firstName'] || '';
        this.lastName = params['name'] || '';
        this.travelers = params['persons'] || '';
      });
    this.sendEvent();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }

  goToMenu() {
    this.router.navigate(['/']);
  }

  sendEvent() {
    this.electronService.ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg);
      console.log('received some event in icpRender');
    })
    this.electronService.ipcRenderer.send('print', 'ping')
  }
}
