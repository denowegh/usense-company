import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrengthColors(password: string): PasswordStrengthColors {
    if (password.length === 0) {
      return { bgColor1: 'gray', bgColor2: 'gray', bgColor3: 'gray' };
    } else if (password.length < 8) {
      return { bgColor1: 'red', bgColor2: 'red', bgColor3: 'red' };
    } else {
      const hasLetters = /[а-яА-Яa-zA-Z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSymbols = /\W/.test(password);

      if (hasLetters && hasNumbers && hasSymbols) {
        return { bgColor1: 'green', bgColor2: 'green', bgColor3: 'green' };
      } else if (this.hasTwoOfThree(hasLetters, hasNumbers, hasSymbols)) {
        return { bgColor1: 'yellow', bgColor2: 'yellow', bgColor3: 'gray' };
      } else {
        return { bgColor1: 'red', bgColor2: 'gray', bgColor3: 'gray' };
      }
    }
  }

  private hasTwoOfThree(
    condition1: boolean,
    condition2: boolean,
    condition3: boolean
  ): boolean {
    return (
      (condition1 && condition2) ||
      (condition1 && condition3) ||
      (condition2 && condition3)
    );
  }
}

interface PasswordStrengthColors {
  bgColor1: string;
  bgColor2: string;
  bgColor3: string;
}
