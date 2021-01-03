import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [
    animate(2000)
  ])
])

export let fancything = trigger('fancy', [
  state('void', style({
    transform: 'translate3d(-240.2px, 0px, 0px)',
  })),
  transition(':enter, :leave', [
    animate(300)
  ])
])

export let spinnerLoader = trigger('loader', [
  state('*', style({
    opacity: 0,
    width: '0%',
    height: '0%',
  })),
  state('void', style({
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    width: '100%',
    height: '100%',
    'align-items': 'center',
    'text-align': 'center',
    'z-index': 1
  })),
  transition(':enter, :leave', [
    animate('2ms 1.2s')
  ]),
])

export let pageFade = trigger('pageFade', [
  state('void', style({
    opacity:0
  })),
  transition(':enter, :leave', [
    animate('1s 1.2s')
  ])
])


