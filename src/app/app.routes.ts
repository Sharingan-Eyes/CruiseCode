import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: 'signin',
        loadComponent: () =>
            import('./features/auth/signin/signin').then(
                (c) => c.Signin
            ),
        // canActivate: [authedGuardCanActivate],
    },
    {
        path: 'signup',
        loadComponent: () =>
            import('./features/auth/signup/signup').then(
                (c) => c.Signup
            ),
        // canActivate: [authedGuardCanActivate],
    },
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
