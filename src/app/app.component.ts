import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'godot';
   unityInstance: any;

   constructor() { }

  ngOnInit() {
      //Engine();
      //var engine = new Engine();
  }

  ngAfterViewInit() {

  }

}
