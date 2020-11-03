import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Injectable()
export class ObservableServiceProvider {
  
  constructor(public http: HttpClient) {
    // console.log('Hello ObservableServiceProvider Provider'); 
  }

  exampleRequest(){
    return this.http.get('http://slowwly.robertomurray.co.uk/delay/16000/url/https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
        timeout(15000)
    )
  }

}
