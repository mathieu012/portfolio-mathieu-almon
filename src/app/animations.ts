import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
       transition('* => *', [
        style({ position: 'relative'}),
            query(':enter, :leave',
            style({
              position: 'absolute',
              margin: 0,
              padding: 0,
              width: '100%'
            }),
                 { optional: true }),
            group([
                 query(':enter', [
                     style({ transform: 'translateX(100%)'}), 
                     animate('1s ease-in-out', 
                     style({ transform: 'translateX(0%)'}))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform: 'translateX(0%)'}),
                     animate('1s ease-in-out', 
                     style({ transform: 'translateX(-100%)'}))
                     ], { optional: true }),
             ])
       ])  
]);