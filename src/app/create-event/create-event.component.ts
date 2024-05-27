import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      eventType: ['', Validators.required],
      numberOfPeople: [0, [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      // Handle form submission here
      console.log(this.eventForm.value);
      this.showEventDetailsDialog(this.eventForm.value);
    } else {
      window.alert("Please enter valid input");
    }
  }

  showEventDetailsDialog(eventData: any) {
    const message =
      `Event Type: ${eventData.eventType}\n` +
      `Number of People: ${eventData.numberOfPeople}\n` +
      `Location: ${eventData.location}\n` +
      `Date: ${eventData.date}`;

    window.alert(message);
  }
}
