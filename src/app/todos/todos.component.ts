import { trigger, transition, style, animate, state} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

// animations: 过一段时间后生效  state：立刻生效
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({  opacity: 0 })),

      transition('void => *, * => void', [
        animate(2000)
      ]),

   
    ])
  ]
})
export class TodosComponent implements OnInit {

  public items = ['create a component', 'implement an animation', 'create a react'];
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

}
