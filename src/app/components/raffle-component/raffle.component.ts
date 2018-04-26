import {Component} from '@angular/core';
import {RaffleServices} from '../../services/raffle.services';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: []
})

export class RaffleComponent {

  loadData: boolean = false;
  raffles: any = [];
  constructor ( private raffleService: RaffleServices ) {
    console.log( raffleService.findAll().subscribe( raffles => {
      this.raffles = raffles;
      this.loadData = true;
      console.log(this.raffles);
    } ));
  }

}
