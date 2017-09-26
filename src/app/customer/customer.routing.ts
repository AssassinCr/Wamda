import { Routes } from '@angular/router';
//
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ManagecustomerComponent } from './managecustomer/managecustomer.component';
import { CreditcustomerComponent } from './creditcustomer/creditcustomer.component';
import { PaidcustomerComponent } from './paidcustomer/paidcustomer.component';

export const CustomerRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'addcustomer',
        component: AddcustomerComponent
    }]
    },{
    path: '',
    children: [ {
      path: 'managecustomer',
      component: ManagecustomerComponent
    }]
    },{
      path: '',
      children: [ {
        path: 'creditcustomer',
        component: CreditcustomerComponent
        }]
    },{
      path: '',
      children: [ {
        path: 'paidcustomer',
        component: PaidcustomerComponent
        }]
    }
];
