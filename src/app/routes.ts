import { HomeComponent } from './components/home/home';
import { PeopleDetailComponent } from './components/people/detail/detail';
import { PeopleListComponent } from './components/people/list/list';

export const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'people',
        component: PeopleListComponent,
    },
    {
        path: 'people/:id',
        component: PeopleDetailComponent,
    },
];
