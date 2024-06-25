import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationDeCitationsComponent } from './creation-de-citations/creation-de-citations.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'creation-de-citations', component: CreationDeCitationsComponent},
];
