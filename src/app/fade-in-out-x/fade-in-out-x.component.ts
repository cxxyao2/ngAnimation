import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-fade-in-out-x',
  templateUrl: './fade-in-out-x.component.html',
  styleUrls: ['./fade-in-out-x.component.css'],
  animations: [ trigger('EnterLeave',[
    state('flyIn', style({transform: 'translateX(0)'})),
    transition(':enter', [
      style({ transform: 'translateX(-100%)'}),
      animate('0.5s 300ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s 300ms ease-out', style({ transform: 'translateX(100%)'}))
    ]),

  ]),

    trigger('fade2', [
      state('void', style({ opacity: 0})),
      transition('void <=> *', animate('1000ms'))
    ])
  ]
})
export class FadeInOutXComponent implements OnInit {

  listItem = [];
  listOrder = 1;
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    const item = 'listItem' + this.listOrder;
    this.listOrder ++;
    this.listItem.push(item);

  }

  removeItem() {
    this.listItem.length -= 1;
  }

}
