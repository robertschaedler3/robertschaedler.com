import {
    animate,
    query,
    style,
    stagger,
    transition,
    trigger
} from '@angular/animations';

export const fadeUp =
    trigger('fadeUp', [
        transition(':enter', [
            style({
                transform: 'translateY(10px)',
                opacity: 0
            }),
            animate('400ms 300ms ease', style({
                transform: 'translateY(0px)',
                opacity: 1
            }))
        ])
    ]);

export const chipListFader =
    trigger('chipListFader', [
        transition(':enter', [
            query('mat-chip', style({
                transform: 'translateY(10px)',
                opacity: 0
            })),
            query('mat-chip',
                stagger('150ms', [
                    animate('300ms 500ms ease-out', style({
                        transform: 'translateY(0px)',
                        opacity: 1
                    }))
                ])
            )
        ])
    ]);
