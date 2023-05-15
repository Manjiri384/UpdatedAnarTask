import { Component } from '@angular/core';
import { appservice } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskData: any = [];
  completedTask: any = [];
  unCompletedTask: any = [];
  constructor(private testApi: appservice) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.testApi.getPublicApi().subscribe((res) => {
      if (res) {
        console.log(res);
        this.taskData = res;
        this.taskData.map((ins: any) => {
          if (ins.completed == true) {
            this.completedTask.push(ins);
          } else {
            this.unCompletedTask.push(ins);
          }
        });
      }
    });
  }
  getUserCheck(e: any, item: any) {
    if (e.target.checked == true) {
      this.unCompletedTask.map((ins: any) => {
        if (ins.title == item) {
          ins.completed = true;

          alert('task is completed');
          var itemList = this.unCompletedTask.indexOf(ins);

          this.unCompletedTask.splice(itemList, 1);
          this.completedTask.push(ins);
        }
      });

      //   this.completedTask = this.completedTask.reverse();
    }
    console.log('test', this.unCompletedTask);
    console.log('test2', this.completedTask);
  }
  delete(item: any) {
    this.completedTask.map((ele: any) => {
      if (ele.title == item) {
        ele.completed = false;
        var itemList = this.completedTask.indexOf(ele);

        this.completedTask.splice(itemList, 1);
        this.unCompletedTask.push(ele);
      }
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
