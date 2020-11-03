import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-interview-exercise-4',
  templateUrl: 'interview-exercise-4.html',
})
export class InterviewExercise_4Page {
  actionStatus: boolean = false;
  tagLine: string = 'Click above';
  isFinalTransmission: boolean = false;
  isFirstTransmission: boolean = true;
  isWelComeTag: boolean = false;
  isFIrstTag: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterviewExercise_4Page');
  }

  public oDivfirstTransformation = true;
  public iDivfirstTransformation = true;
  public tagfirstTransformation = true;

  public outerClasses = {
    "outerDiv": this.oDivfirstTransformation,
    "outerDivDashed": false
  }

  public innerClasses = {
    "innerDiv": this.iDivfirstTransformation,
    "innerDivTransform": false,
    "fade-out": false
  }

  public tagClasses = {
    "tagline": this.tagfirstTransformation,
    "fade-out": false,
    "fade-in": false
  }

  public welcomeTagClasses = {
    "tagline": true,
    "fade-in": true
  }

  action(){
    // alert('success');
    this.innerClasses = {
      "innerDiv": true,
      "innerDivTransform": true,
      "fade-out": true
    }

    setTimeout(() => {
      this.outerClasses = {
        "outerDiv": false,
        "outerDivDashed": true
      }
    },5000);

    setTimeout(() => {
      this.tagClasses = {
        "tagline": true,
        "fade-out": true,
        "fade-in": false
      }
    },6000);

    setTimeout(() => {
      this.isFIrstTag = false;
      this.isWelComeTag = true;
    },7000);

    setTimeout(() => {
      this.isFirstTransmission = false;
      this.isFinalTransmission = true;
    },8000);
    
  }

}
