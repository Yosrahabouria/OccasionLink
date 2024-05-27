import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (email === 'yosrahabouria@gmail.com' && password === 'yosra2024') {
        console.log(this.loginForm.value);
        this.showEventDetailsDialog(this.loginForm.value);
      } else {
        window.alert("Invalid email or password");
      }
    } else {
      window.alert("Please enter valid input");
    }
  }

  showEventDetailsDialog(eventData: any) {
    const message =
      `Congratulations! You have successfully logged in as : ${eventData.email}`;

    window.alert(message);
  }
}
