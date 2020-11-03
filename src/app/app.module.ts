import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StorageProvider } from '../providers/storage/storage';

import { IonicStorageModule } from '@ionic/storage'
import { Camera } from '@ionic-native/camera';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ObservableServiceProvider } from '../providers/observable-service/observable-service';
import { InterviewExercise_2Page } from '../pages/interview-exercise-2/interview-exercise-2';
import { HttpClientModule } from '@angular/common/http';
import { InterviewExercise_4Page } from '../pages/interview-exercise-4/interview-exercise-4';
import { InterviewExercise_1Page } from '../pages/interview-exercise-1/interview-exercise-1';
import { InterviewExercise_3Page } from '../pages/interview-exercise-3/interview-exercise-3';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InterviewExercise_2Page,
    InterviewExercise_4Page,
    InterviewExercise_1Page,
    InterviewExercise_3Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InterviewExercise_2Page,
    InterviewExercise_4Page,
    InterviewExercise_1Page,
    InterviewExercise_3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    ObservableServiceProvider
  ]
})
export class AppModule {}
