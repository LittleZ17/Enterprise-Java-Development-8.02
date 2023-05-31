import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  contactForm: FormGroup;
  nameInput: FormControl;
  occupationInput: FormControl;
  emailInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl;

  formSubmitted: boolean = false;
 
  constructor() {
    this.nameInput = new FormControl("", Validators.required);
    this.occupationInput = new FormControl("");
    this.emailInput = new FormControl("",[Validators.required, Validators.email]);
    this.subjectInput = new FormControl("", Validators.required);
    this.contentInput = new FormControl(
    "",
    [Validators.required,
    Validators.minLength(10),
    Validators.maxLength(255)]);

    this.contactForm = new FormGroup({
      name: this.nameInput,
      occupation: this.occupationInput,
      email: this.emailInput,
      subject: this.subjectInput,
      content: this.contentInput,
    })
  }

  onSubmit(): void {
    if(this.contactForm.invalid){
      return;
    }
    // console.log("mesaje enviado");
    this.formSubmitted = true;
    this.contactForm.reset();
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }
}
