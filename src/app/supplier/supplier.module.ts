import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TablesRoutes } from './supplier.routing';

import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ManagesupplierComponent } from './managesupplier/managesupplier.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule
  ],
  declarations: [
      AddsupplierComponent,
      ManagesupplierComponent      
  ]
})

export class SupplierModule {}
