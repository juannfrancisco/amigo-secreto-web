import {Component} from '@angular/core';
import {Raffle} from '../../model/raffle.model';
import {RaffleServices} from '../../services/raffle.services';

@Component({
  selector: 'app-enrollment-raffle',
  templateUrl: './enrollment-raffle.component.html',
  styleUrls: []
})

export class EnrollmentRaffleComponent {

  raffle = new Raffle(1, '', '', '', {}, '', []);

  constructor ( private raffleService: RaffleServices ) {

  }

  saveRaffle() {
    this.raffleService.saveRaffle(this.raffle);
  }

}

