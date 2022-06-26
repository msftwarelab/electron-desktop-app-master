import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ecran-veille',
  templateUrl: './ecran-veille.component.html',
  styleUrls: ['./ecran-veille.component.css']
})
export class EcranVeilleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.localStorage.clear();
  }
  goToLanguage() {
    this.router.navigate(['/language']);
  }

}
