import { Routes } from '@angular/router';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';

export const routes: Routes = [
    {path: 'shoe', component: ShoeListComponent},
    {path: 'shoe/:id', component: ShoeDetailComponent},
    { path: '', redirectTo: '/shoe', pathMatch: 'full'},
    { path: '**', component: ShoeListComponent },
];
