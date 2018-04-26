import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

const BUCKET_NAME = 'raffle/';

@Injectable()
export class RaffleServices {
  raffles: any = [ ];

  constructor( private fireBaseService: AngularFireDatabase) {}


  public findAll() {
    return this.fireBaseService.list( BUCKET_NAME).valueChanges();
  }

  public findById( id ) {
    // return this.fireBaseService.filter(BUCKET_NAME + id).valueChanges();
    return this.fireBaseService.list(BUCKET_NAME + id).valueChanges();
  }

  public saveRaffle(raffle) {
    raffle.id = Date.now();
    console.log('Guardando datos..', raffle);
    this.fireBaseService.database.ref(BUCKET_NAME + raffle.id ).set( raffle );
  }
}
