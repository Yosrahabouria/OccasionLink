import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.showEventDetailsDialog(this.userForm.value);
    } else {
      window.alert("Please enter valid input");
    }
  }

  showEventDetailsDialog(eventData: any) {
    const message =
      `Congratulations! You have successfully created the user: ${eventData.firstName}`+`${eventData.lastName}`;

    window.alert(message);
  }
}
