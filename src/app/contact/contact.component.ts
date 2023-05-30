// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css'],
// })
// export class ContactComponent {
//   contactForm: FormGroup;
//   isDisable: boolean = false;
//   successMessage: string = '';

//   constructor(private formBuilder: FormBuilder) {
//     this.contactForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       occupation: [''],
//       email: ['', [Validators.required, Validators.email]],
//       subject: ['', Validators.required],
//       content: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(10),
//           Validators.maxLength(255),
//         ],
//       ],
//     });
//   }

//   get formControls() {
//     return this.contactForm.controls;
//   }

//   ngOnInit(): void {}

//   onSubmit(): void {
//     this.isDisable = true;

//     if (this.contactForm.invalid) {
//       return;
//     }

//     this.successMessage = '¡Mensaje enviado con éxito!';
//     this.contactForm.reset();
//     this.isDisable = false;
//   }
// }
