import { Routes } from '@angular/router';
import { PasswordStrengthComponent } from './pages/password-strength/password-strength.component';

export const routes: Routes = [
  {
    path: '',
    component: PasswordStrengthComponent,
    pathMatch: 'full',
  },
];
