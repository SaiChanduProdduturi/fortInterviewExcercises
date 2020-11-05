import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { ObservableServiceProvider } from '../../providers/observable-service/observable-service';

@IonicPage()
@Component({
  selector: 'page-interview-exercise-1',
  templateUrl: 'interview-exercise-1.html',
})

export class InterviewExercise_1Page {

  subscription: ISubscription;
  isSubscribe: boolean = true;
  isUnSubscribe: boolean = false;
  character: number = 65;
  iterator: number=1;
  result: any=[];
  interval: number = 10;
 
  constructor(public navCtrl: NavController, public observable: ObservableServiceProvider) {}

  ngOnInit(){

  }

  onClick(cond){

    if (cond == 'subscribe') {
      this.isSubscribe = false;
      this.isUnSubscribe = true;

      this.subscription = Observable.interval(1000).subscribe((val) => {

        if (this.character > 90) {
          this.character = 65;
          this.iterator = 1;
          this.interval = 10;
        }

        for (let i = 1; i <= this.iterator; i++) {
          this.result.push(String.fromCharCode(this.character));
        }
        console.log(this.result.join(""));
        if (this.iterator % 2 == 0) {
          console.log(this.interval);
          this.interval += 10;
        }
        this.result = [];
        this.character += 1;
        this.iterator += 1;

      });
    } else if (cond == 'unsubscibe') {
      this.isUnSubscribe = false;
      this.isSubscribe = true;
      this.subscription.unsubscribe();
      console.log('Cancelled..');
    } 
  }

   

  // obsFun(cond){
    
  //   if(cond == 'subscribe'){
  //     this.isSubscribe = false;
  //     this.isUnSubscribe = true;
  //     this.subscription = observable.subscribe({
  //       next(x) { console.log('got value ' + x); },
  //       error(err) { console.error('something wrong occurred: ' + err); },
  //       complete() { }
  //     });
  //   }else if(cond == 'unsubscibe'){
  //     this.isUnSubscribe = false;
  //     this.isSubscribe = true;
  //     this.subscription.unsubscribe();
  //     console.log('Cancelled..');
  //   }

  // }

}
