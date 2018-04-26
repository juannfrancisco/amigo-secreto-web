import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RaffleComponent} from './components/raffle-component/raffle.component';
import {EnrollmentComponent} from './components/enrollment-component/enrollment.component';
import {RaffleProfileComponent} from './components/raffle-profile-component/raffle-profile.component';

// Firebase dependecies
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {environment} from '../environments/environment';
import {EnrollmentRaffleComponent} from './components/enrollment-raffle-component/enrollment-raffle.component';
import {FormsModule} from '@angular/forms';
import {RaffleServices} from './services/raffle.services';




const APP_ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: 'sorteos', component: RaffleComponent},
  {path: 'nuevo/sorteo', component: EnrollmentRaffleComponent},
  {path: 'inscripcion', component: EnrollmentComponent},
  {path: 'sorteo/:id', component: RaffleProfileComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    RaffleComponent,
    EnrollmentComponent,
    RaffleProfileComponent,
    EnrollmentRaffleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    RaffleServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
