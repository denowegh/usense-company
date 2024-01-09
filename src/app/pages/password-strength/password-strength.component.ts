import { Component } from '@angular/core';
import { PasswordStrengthService } from '../../services/password-strength-service.service';
import { PasswordInputComponent } from '../../components/password-input/password-input.component';

@Component({
  selector: 'password-strength.component',
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss',
  standalone: true,
  imports: [PasswordInputComponent],
})
export class PasswordStrengthComponent {
  passwordStrength = {
    bgColor1: 'gray',
    bgColor2: 'gray',
    bgColor3: 'gray',
  };

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  onPasswordInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.passwordStrength =
      this.passwordStrengthService.getPasswordStrengthColors(value);
  }
}
