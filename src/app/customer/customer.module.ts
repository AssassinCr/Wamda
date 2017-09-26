import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';

import { CustomerRoutes } from './customer.routing';

import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ManagecustomerComponent } from './managecustomer/managecustomer.component';
import { CreditcustomerComponent } from './creditcustomer/creditcustomer.component';
import { PaidcustomerComponent } from './paidcustomer/paidcustomer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
      AddcustomerComponent,
      ManagecustomerComponent,
      CreditcustomerComponent,
      PaidcustomerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CustomerModule {}
