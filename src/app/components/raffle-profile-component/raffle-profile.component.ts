import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RaffleServices} from '../../services/raffle.services';
import {Raffle} from '../../model/raffle.model';


@Component({
  selector: 'app-raffle-profile',
  templateUrl: './raffle-profile.component.html',
  styleUrls: []
})

export class RaffleProfileComponent {

  raffle: any = new Raffle( 0, '', '', '',null, '', [] );

  constructor( private route: ActivatedRoute, private raffleService: RaffleServices  ) {
    raffleService.findById( this.route.snapshot.params.id  ).subscribe( raffle => {
      this.raffle = raffle;
      console.log(this.raffle);
    } );

  }
}

