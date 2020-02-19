import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {EventInput, startOfDay } from '@fullcalendar/core';

import { Options } from 'selenium-webdriver/safari';
import { Plugins } from 'protractor/built/plugins';



@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {

 

  calendarPlugins = [dayGridPlugin,interactionPlugin];
  
  calendarEvents: EventInput[]=[
    {title:"New Year's Day",start: new Date('jan 1,2020'), end: new Date('jan 1,2020')},
    {title:'Revolution Day',start: new Date('jan 14,2020')},
    {title:'Independence Day',start: new Date('Mar 20,2020')},
    {title:"Martyrs' Day",start: new Date('apr 9,2020')},
    {title:'Labour Day',start: new Date('may 1,2020')},
    {title:'Eid al-Fitr',start: new Date('may 24,2020')},
    {title:'Eid al-Fitr Holiday',start: new Date('may 25,2020')},
    {title:'Eid al-Fitr Holiday',start: new Date('may 26,2020')},
    {title:'Republic Day',start: new Date('jul 25,2020')},
    {title:'Eid al-Adha',start: new Date('jul 31,2020')},
    {title:'Eid al-Adha Holiday',start: new Date('aug 1,2020')},
    {title:"Women's Day",start: new Date('aug 13,2020')},
    {title:'Islamic New Year',start: new Date('aug 20,2020')},
    {title:'Evacuation Day',start: new Date('oct 15,2020')},
    {title:"Prophet Muhammad's Birthday",start: new Date('oct 29,2020')}
 
  ]
  
  
  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }
 

  
  
  dayRender(args){
    var cell:HTMLElement=args.el;
    cell.onclick=(ev:MouseEvent)=>{    
      this.addEvent(args.date);
    }
  }


  addEvent(date){
    var title = prompt("Enter event title");
    if(title == '')return;
    this.calendarEvents = this.calendarEvents.concat({
      title:title,
      start:date,
      color:'pink',
      end:date
      
    })
  }



  sendMeHome() {
    this.router.navigate(['']);
    
  }


}
