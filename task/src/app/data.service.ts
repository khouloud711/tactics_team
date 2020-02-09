import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //calendarEvents= new BehaviorSubject
  //calendarEvents = this.calendarEvents.asObservable();
  constructor() { }


  //changeEvent(calendarEvents) {
  //  this.calendarEvents.next(calendarEvents);
 // }

}

