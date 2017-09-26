import { Routes } from '@angular/router';

import { ManageinvoiceComponent } from './manageinvoice/manageinvoice.component';
import { NewinvoiceComponent } from './newinvoice/newinvoice.component';
import { PosinvoiceComponent } from './posinvoice/posinvoice.component';

export const FormsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'manageinvoice',
        component: ManageinvoiceComponent
    }]},{
    path: '',
    children: [ {
      path: 'newinvoice',
      component: NewinvoiceComponent
    }]
    },{
    path: '',
    children: [ {
      path: 'posinvoice',
      component: PosinvoiceComponent
    }]
    }
];
