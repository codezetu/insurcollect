import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartScreenComponent } from './start-screen/start-screen.component';
import { LoginComponent } from './login/login.component';
import { StepOneComponent } from './signup/step-one/step-one.component';
import { StepTwoComponent } from './signup/step-two/step-two.component';
import { PayWithoutRegistrationComponent } from './pay-without-registration/pay-without-registration.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', pathMatch: 'full', redirectTo: 'signup/step-one' },
  { path: 'signup/step-one', component: StepOneComponent, pathMatch: 'full' },
  { path: 'signup/step-two', component: StepTwoComponent, pathMatch: 'full' },
  { path: 'without-registration', component: PayWithoutRegistrationComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
