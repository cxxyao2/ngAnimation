import { trigger, transition, style, animate, state} from '@angular/animations';

export let fade = trigger('fade', [
      state('void', style({  opacity: 0 })),

      transition('void => *, * => void', [
        animate(2000)
      ])
    ]);

export let changeDivSize = trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial => final', animate('1s 500ms ease-out')),
      transition('final => initial', animate('3s 1000ms'))
    ]);


export let balloonEffect1 = trigger('balloonEffect',[
  state('initial', style({
    backgroundColor: 'green',
    transform: 'scale(1)'
  })),
  state('final', style({
    backgroundColor: 'green',
    transform: 'scale(1.5)'
  })),
  transition('final => initial', animate('1000ms')),
  transition('initial => final', animate('1000ms'))
]);
