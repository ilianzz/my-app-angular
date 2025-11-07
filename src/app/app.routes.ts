import { Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: SaludoComponent },
  { path: 'acerca', component: AboutComponent },
  { path: '**', redirectTo: 'inicio' }
];
