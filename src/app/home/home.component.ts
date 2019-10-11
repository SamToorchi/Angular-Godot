import { Component, OnInit } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Subscription } from "rxjs";


declare const initGodotDataBase: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private subscription: Subscription;

    constructor() {

      }

  ngOnInit(){
      initGodotDataBase();
      let timer = TimerObservable.create(1000, 3000);
      this.subscription = timer.subscribe(t => {
          this.start();
        });

      //const source = interval(10000);

      /*
      let db = new NgxIndexedDB('/userfs');
      db.openDatabase(21, evt => {


      }).then(function(){
        db.getAll('FILE_DATA').then(
            FILE_DATA => {
                let levelSpec = new TextDecoder().decode(FILE_DATA[0].contents)
                console.log(levelSpec);
                this.subscription = interval(3000).subscribe(val => console.log(levelSpec));
            },
            error => {
                console.log(error);
            });
          });
*/

  }




  start(){
    console.log("start done");
      let db = new NgxIndexedDB('/userfs');
      db.openDatabase(21, evt => {


      }).then(function(){
        db.getAll('FILE_DATA').then(
            FILE_DATA => {
                let levelSpec = new TextDecoder().decode(FILE_DATA[0].contents)
                console.log(levelSpec);
            },
            error => {
                console.log(error);
            });
          });

    }



}
