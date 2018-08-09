import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

import { FeedbackService } from '../services/feedback.service';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;

  contactType = ContactType;

  errMess = null;

  feedbackCopy = null;

  displaySpinner = false;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': '',
    'message': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 20 characters long.'
    },
    'lastname': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 20 characters long.'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.',
      'minlength': 'Tel. number must be at least 9 numbers long.',
      'maxlength': 'Tel. number cannot be more than 15 numbers long.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
    'message': {
      'required': 'A brief desciption of feedback or complaint required'
    }
  };
  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder, private fbService: FeedbackService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      telnum: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15), Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: '',
      message: ['', [Validators.required]]
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }

  onSubmit() {
    this.displaySpinner = true;
    this.feedback = this.feedbackForm.value;
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: '',
      message: ''
    });
    this.feedbackFormDirective.resetForm();

    this.fbService.submitFeedback(this.feedback)
      .subscribe(feedback => {
        this.displaySpinner = false;
        this.feedbackCopy = feedback;
        console.log(this.feedbackCopy.firstname.toString());
        setTimeout(() => {
          this.feedbackCopy = null;
        }, 5000);
      }, errmess => { this.feedbackCopy = null; this.errMess = <any>errmess; }
    );
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }

    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];

          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }

        }

      }
    }
  }

}
