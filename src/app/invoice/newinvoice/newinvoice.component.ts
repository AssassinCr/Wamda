import { Component, OnInit } from '@angular/core';
// import initSliders = require('../../../../assets/js/init/initSliders.js');
// import initDatetimepickers = require('../../../../assets/js/init/initDatetimepickers.js');

declare var require: any

declare var $:any
@Component({
    moduleId: module.id,
    selector: 'newinvoice-cmp',
    templateUrl: 'newinvoice.component.html'
})

export class NewinvoiceComponent implements OnInit{

    ngOnInit() {
    }
    
    ngAfterViewInit(){
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip({
        	duration      : 3000
        });
    }
}
