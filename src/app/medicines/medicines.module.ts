import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { ComponentsRoutes } from './medicines.routing';
import { ManagemedicineComponent } from './managemedicine/managemedicine.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule
  ],
  declarations: [
      AddmedicineComponent,
      ManagemedicineComponent

  ]
})

export class MedicinesModule {}
