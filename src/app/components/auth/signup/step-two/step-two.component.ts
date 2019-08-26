import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss', '../../auth-base.scss'],
})
export class StepTwoComponent implements OnInit {
  public stepTwoForm = this.fb.group({
    billing_account_number: this.fb.control(''),
    username: this.fb.control(''),
    email: this.fb.control(''),
    phone: this.fb.control(''),
    otp: this.fb.control(''),
    password: this.fb.control(''),
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.signUpFormData) {
      this.router.navigate(['/signup/step-one']);
    }
  }

  public submitForm() {
    const userData = { ...this.stepTwoForm.value, ...this.authService.signUpFormData };
    this.authService.signUp(userData).subscribe(() => {
      this.authService.signUpFormData = null;
      this.router.navigate(['/login']);
    });
  }
}
