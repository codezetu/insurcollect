import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from 'components/auth/login/login.component';
import { StepOneComponent } from 'components/auth/signup/step-one/step-one.component';
import { StepTwoComponent } from 'components/auth/signup/step-two/step-two.component';
import { StartScreenComponent } from 'components/auth/start-screen/start-screen.component';
import { PayWithoutRegistrationComponent } from 'components/auth/pay-without-registration/pay-without-registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    StepOneComponent,
    StepTwoComponent,
    StartScreenComponent,
    PayWithoutRegistrationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
})
export class AuthModule {}
