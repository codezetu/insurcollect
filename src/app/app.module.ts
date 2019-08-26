import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';

import { TokenInterceptor } from './interceptors/token.interceptor';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccordionComponent } from './components/shared/accordion/accordion.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AccordionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'HTTP_X_CSRFTOKEN',
    }),
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, AuthService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
