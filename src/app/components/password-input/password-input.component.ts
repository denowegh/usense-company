import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent {
  @Output() input = new EventEmitter<any>();
}
