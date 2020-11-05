import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ObservableServiceProvider } from '../../providers/observable-service/observable-service';


@IonicPage()
@Component({
  selector: 'page-interview-exercise-2',
  templateUrl: 'interview-exercise-2.html',
})
export class InterviewExercise_2Page {

  constructor(public navCtrl: NavController, public webService:ObservableServiceProvider, 
    public navParams: NavParams) {}

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


}
