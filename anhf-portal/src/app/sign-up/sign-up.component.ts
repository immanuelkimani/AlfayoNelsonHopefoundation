import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit(signUpForm)" #signUpForm="ngForm">
      <input type="email" name="email" ngModel placeholder="Email" required>
      <input type="password" name="password" ngModel placeholder="Password" required>
      <button type="submit">Sign Up</button>
    </form>
  `
})
export class SignUpComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: any) {
    const { email, password } = form.value;
    this.authService.signUp(email, password)
      .then(() => console.log('User signed up'))
      .catch(error => console.error('Error signing up', error));
  }
}
