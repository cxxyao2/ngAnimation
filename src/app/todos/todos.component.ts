import { Component, OnInit } from '@angular/core';
import { fade, changeDivSize, balloonEffect1 } from '../animations';

// animations: 过一段时间后生效  state：立刻生效
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [ fade, changeDivSize, balloonEffect1]
})
export class TodosComponent implements OnInit {

  currentState = 'initial';
  currentBalloonState = 'initial';
  items: any[] = ['create a component', 'implement an animation', 'create a react'];
  constructor() { }

  ngOnInit() {
  }

  addItem($event) {
    this.items.push($event.value);
  }

  removeItem(item) {
     const indexItem = this.items.indexOf(item);
     this.items.splice(indexItem, 1 );
   // const xxx =  this.items.splice(item.index);
    // console.log(xxx);
  }

  changeState(){
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }


  changeBalloonState(){
    this.currentBalloonState = this.currentBalloonState === 'initial' ? 'final' : 'initial';
  }
}
