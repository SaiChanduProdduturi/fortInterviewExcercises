import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ObservableServiceProvider } from '../../providers/observable-service/observable-service';


@IonicPage()
@Component({
  selector: 'page-interview-exercise-2',
  templateUrl: 'interview-exercise-2.html',
})
export class InterviewExercise_2Page {
  isDisable: boolean = false;
  showError: string;

  constructor(public navCtrl: NavController, public webService:ObservableServiceProvider, public navParams: NavParams) {
    setTimeout(() => {
      this.isDisable = true;
      this.showError = "15 seconds completed request timedout, now please check console."
    },15000)
  }

  ngOnInit(){
    
    this.webService.exampleRequest().subscribe(
      (response) => {
        console.log("Here is the response, It is on time..");
        console.log(response);
      },
      (error) => {
        console.log("There was timeout error");
        console.log(error);
      }
    )
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InterviewExercise_2Page');
  }

}
