import { Routes } from '@angular/router';

import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ManagesupplierComponent } from './managesupplier/managesupplier.component';

export const TablesRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'addsupplier',
        component: AddsupplierComponent
    }]
    },{
      path: '',
      children: [ {
        path: 'managesupplier',
        component: ManagesupplierComponent
        }]
    }
];
