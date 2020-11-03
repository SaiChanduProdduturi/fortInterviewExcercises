import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { InterviewExercise_2Page } from '../interview-exercise-2/interview-exercise-2';
import { ObservableServiceProvider } from '../../providers/observable-service/observable-service';
import { InterviewExercise_4Page } from '../interview-exercise-4/interview-exercise-4';

const observable = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('A');
  }, 1000);
  setTimeout(() => {
    subscriber.next('BB');
  }, 2000);
  setTimeout(() => {
    subscriber.next(10);
  }, 2000);
  setTimeout(() => {
    subscriber.next('CCC');
  }, 3000);
  setTimeout(() => {
    subscriber.next('DDDD');
  }, 4000);
  setTimeout(() => {
    subscriber.next(20);
  }, 4000);
  setTimeout(() => {
    subscriber.next('EEEEE');
  }, 5000);
  setTimeout(() => {
    subscriber.next('FFFFFF');
  }, 6000);
  setTimeout(() => {
    subscriber.next(30);
    subscriber.complete();
  }, 6000);

});

@IonicPage()
@Component({
  selector: 'page-interview-exercise-1',
  templateUrl: 'interview-exercise-1.html',
})
export class InterviewExercise_1Page {

  subscription: ISubscription;
  isSubscribe: boolean = true;
  isUnSubscribe: boolean = false;
  

  constructor(public navCtrl: NavController, public observable: ObservableServiceProvider) {

  }

  ngOnInit(){
    
  }

  obsFun(cond){
    
    if(cond == 'subscribe'){
      this.isSubscribe = false;
      this.isUnSubscribe = true;
      this.subscription = observable.subscribe({
        next(x) { console.log('got value ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { }
      });
    }else if(cond == 'unsubscibe'){
      this.isUnSubscribe = false;
      this.isSubscribe = true;
      this.subscription.unsubscribe();
      console.log('Cancelled..');
    }

  }

}
