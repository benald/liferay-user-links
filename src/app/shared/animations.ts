import { trigger, state, style, transition, animate } from '@angular/animations';

export class Animations {

    public static slideInOut = trigger('slideInOut', [
        state('true', style({ height: '0px' })),
        state('false', style({ height: '*' })),
        transition('1 => 0', [animate('500ms ease-in')]),
        transition('0 => 1', [animate('500ms ease-out')])
    ]);

    public static openClose = trigger('openClose', [
        state('open', style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })),
        state('closed', style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green'
        })),
        transition('open => closed', [
          animate('1s')
        ]),
        transition('closed => open', [
          animate('0.5s')
        ]),
    ])
}