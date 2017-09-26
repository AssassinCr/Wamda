import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutes } from './invoice.routing';

import { ManageinvoiceComponent } from './manageinvoice/manageinvoice.component';
import { NewinvoiceComponent } from './newinvoice/newinvoice.component';
import { PosinvoiceComponent } from './posinvoice/posinvoice.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
      ManageinvoiceComponent,
      NewinvoiceComponent,
      PosinvoiceComponent
  ]
})

export class Invoice {}
