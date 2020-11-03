import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InterviewExercise_1Page } from '../interview-exercise-1/interview-exercise-1';
import { InterviewExercise_2Page } from '../interview-exercise-2/interview-exercise-2';
import { InterviewExercise_3Page } from '../interview-exercise-3/interview-exercise-3';
import { InterviewExercise_4Page } from '../interview-exercise-4/interview-exercise-4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    
  }

  navigate(navigation){
    if(navigation == 'EX1'){
      this.navCtrl.push(InterviewExercise_1Page)
    }else if(navigation == 'EX2'){
      this.navCtrl.push(InterviewExercise_2Page)
    }else if(navigation == 'EX3'){
      this.navCtrl.push(InterviewExercise_3Page)
    }else if(navigation == 'EX4'){
      this.navCtrl.push(InterviewExercise_4Page)
    }else{}
  }
  
}
