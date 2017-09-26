import { Routes } from '@angular/router';

import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { ManagemedicineComponent } from './managemedicine/managemedicine.component';


export const ComponentsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'addmedicine',
        component: AddmedicineComponent
    }]},{
    path: '',
    children: [ {
      path: 'managemedicine',
      component: ManagemedicineComponent
    }]
    }
];
