import {
  transition,
  trigger,
  style,
  animate,
  query,
  stagger,
  animateChild,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(
    ':enter',
    [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('600ms {{delay}}ms cubic-bezier(0.34, 1.45, 0.7, 1)'),
    ],
    { params: { delay: 0 } }
  ),
]);

export const listFadeIn = trigger('listFadeIn', [
  transition(
    ':enter',
    [
      query(
        '.list-item',
        style({
          transform: 'translateY(10px)',
          opacity: 0,
        })
      ),
      query(
        '.list-item',
        stagger('20ms', [
          animate(
            '600ms {{delay}}ms cubic-bezier(0.34, 1.45, 0.7, 1)',
            style({
              transform: 'translateY(0px)',
              opacity: 1,
            })
          ),
        ])
      ),
    ],
    { params: { delay: 0 } }
  ),
]);

export const spin = trigger('spin', [
  transition(
    ':enter',
    [
      style({
        opacity: 0,
        transform: 'translateY(5px) rotate(-1300deg) scale3d(0.1, 0.1, 0.1)',
      }),
      animate('600ms {{delay}}ms cubic-bezier(0.34, 1.2, 0.7, 1)'),
    ],
    { params: { delay: 0 } }
  ),
]);

export const slideIn = trigger('slideIn', [
  transition(
    '* -> left',
    [
      style({
        opacity: 0,
        transform: 'translateX(20px)',
      }),
      animate('600ms {{delay}}ms cubic-bezier(0.34, 1.45, 0.7, 1)'),
      query('@*', animateChild(), { optional: true }),
    ],
    { params: { delay: 0 } }
  ),
  transition(
    '* -> right',
    [
      style({
        opacity: 0,
        transform: 'translateX(-20px)',
      }),
      animate('600ms {{delay}}ms cubic-bezier(0.34, 1.45, 0.7, 1)'),
      query('@*', animateChild(), { optional: true }),
    ],
    { params: { delay: 0 } }
  ),
]);
