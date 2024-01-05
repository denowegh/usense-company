import { Component } from '@angular/core';

@Component({
  selector: 'password-strength.component',
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss',
})
export class PasswordStrengthComponent {
  passwordStrength = {
    bgColor1: 'gray',
    bgColor2: 'gray',
    bgColor3: 'gray',
  };

  onPasswordInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.updatePasswordStrength(value);
  }

  updatePasswordStrength(password: string) {
    const hasLetters = /[а-яА-Яa-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /\W/.test(password);

    if (password.length === 0) {
      this.passwordStrength = {
        bgColor1: 'gray',
        bgColor2: 'gray',
        bgColor3: 'gray',
      };
    } else if (password.length < 8 && password.length !== 0) {
      this.passwordStrength = {
        bgColor1: 'red',
        bgColor2: 'red',
        bgColor3: 'red',
      };
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.passwordStrength = {
        bgColor1: 'green',
        bgColor2: 'green',
        bgColor3: 'green',
      };
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasNumbers) ||
      (hasNumbers && hasSymbols)
    ) {
      this.passwordStrength = {
        bgColor1: 'yellow',
        bgColor2: 'yellow',
        bgColor3: 'gray',
      };
    } else {
      this.passwordStrength = {
        bgColor1: 'red',
        bgColor2: 'gray',
        bgColor3: 'gray',
      };
    }
  }
}
