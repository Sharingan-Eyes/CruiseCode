import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: 'home',
        loadComponent: () =>
            import('./features/home/home').then(
                (c) => c.Home
            ),
        // canActivate: [authedGuardCanActivate],
    },
    {
        path: 'forbidden',
        loadComponent: () =>
            import('./features/forbidden/forbidden').then(
                (c) => c.Forbidden
            ),
    },
    {
        path: '',
        redirectTo: 'operator',
        pathMatch: 'full',
    },
    { path: '**', redirectTo: '' },
];
