import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss', '../../auth-base.scss'],
})
export class StepOneComponent implements OnInit {
  public termsAgreed = false;
  public stepOneForm = this.fb.group({
    first_name: this.fb.control(''),
    last_name: this.fb.control(''),
    date_of_birth: this.fb.control(''),
    zip_code: this.fb.control(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    if (this.authService.signUpFormData) {
      this.stepOneForm.patchValue(this.authService.signUpFormData);
    }
  }

  public termsChanged(value: boolean) {
    this.termsAgreed = value;
  }

  public submitForm() {
    this.authService.signUpFormData = this.stepOneForm.value;
    this.router.navigate(['..', 'step-two'], { relativeTo: this.route });
  }
}
