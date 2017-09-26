import { NgModule, Component, Pipe, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

import { RegisterComponent } from './register.component';
import { AuthService } from '../../providers/auth-service/auth-service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule],
  declarations: [
    RegisterComponent,
  ],
  bootstrap: [
    RegisterComponent
  ],
  providers: [ AuthService, ]

})
export class RegisterModule {}

platformBrowserDynamic().bootstrapModule(RegisterModule);
