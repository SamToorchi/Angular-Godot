import { Component, OnInit  } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { interval, Subscription } from 'rxjs';

declare const initGodot: any;
let subscription: Subscription;

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styles: ['./database.component.scss']
})

export class DatabaseComponent  implements OnInit{


    constructor() { }

    ngOnInit() {
      initGodot();
      /* Example for create and read data from IndexedDB*/
/*
    let  db = new NgxIndexedDB('DVdb', 1);
    db.openDatabase(1, evt => {
      let objectStore = evt.currentTarget.result.createObjectStore('people', { keyPath: 'id', autoIncrement: true });

      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });

    }).then(function () {
        db.add('people', { name: 'Sumit', email: 'Sumit@test.com' }).then(
          () => {
              console.log()
          },
          error => {
              console.log(error);
          }
        );
    }).then(function(){
      db.getAll('people').then(
            people => {
                console.log(people);
            },
            error => {
                console.log(error);
            }
        );
    });
    */
          let db = new NgxIndexedDB('/userfs');
          db.openDatabase(21, evt => {
            /* Do something */

          }).then(function(){
            db.getAll('FILE_DATA').then(
                FILE_DATA => {
                    let levelSpec = new TextDecoder().decode(FILE_DATA[1].contents)
                    console.log(levelSpec);
                    this.subscription = interval(3000).subscribe(val => console.log(levelSpec));
                },
                error => {
                    console.log(error);
                });
              });

      }

}
