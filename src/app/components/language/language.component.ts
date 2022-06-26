import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-language',
  templateUrl: './language.html',
  styleUrls: ['./language.css']
})
export class LanguageComponent {

  constructor(private router: Router) {
  }

  setLanguage = (language: string) => {
    switch (language) {
      case 'US':
        this.router.navigate(['tuktuk']);
        break;
      case 'FR':
        this.router.navigate(['tuktukfr']);
        break;
      case 'ES':
        this.router.navigate(['tuktukes']);
        break;
    }
  }
}
