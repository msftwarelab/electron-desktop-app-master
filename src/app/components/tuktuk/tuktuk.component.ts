import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MailerService} from '../services/mailer.service';


@Component({
  selector: 'app-tuktuk',
  templateUrl: './tuktuk.component.html',
  styleUrls: ['./tuktuk.component.css'],
  providers: [MailerService]
})
export class TuktukComponent implements OnInit {
  openingHours  = ['2PM', '6PM'];
  ticketId = false;
  numberOfTravelers: number;
  selectedHour: number;
  firstName: string;
  lastName: string;
  travelers: number[] = [];

  constructor(private router: Router, private mailer: MailerService) {
  }

  ngOnInit() {
    this.populateTravelers();
  }

  populateTravelers = () => {
    for (let i = 1; i < 7; i++) {
      this.travelers.push(i);
    }
  }
  formIsComplete() {
    return (this.numberOfTravelers && this.selectedHour && this.lastName && this.firstName);
  }
  print() {
    this.router.navigate(['print'], {
      queryParams: {
        firstName: this.firstName,
        name: this.lastName,
        persons: this.numberOfTravelers
      }
    });
  }


  goBack() {
    this.router.navigate(['/']);
  }

  bookTuk = () => {
    this.ticketId = true;
    this.mailer.sendEmail(this.lastName, this.firstName, this.selectedHour, this.numberOfTravelers).subscribe((res) => {
      console.log(res);
    });
  }
}
