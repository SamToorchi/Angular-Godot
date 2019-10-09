import { Component, OnInit  } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styles: ['./database.component.scss']
})

export class DatabaseComponent  implements OnInit{


    constructor() { }

    ngOnInit() {
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



}



}
