import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';



declare var $:any;
declare interface Table_With_Checkboxes {
    id?: number;
    ischecked?: boolean;
    product_name: string;
    type: string;
    quantity: number;
    price: any;
    amount: string;
}
export interface TableData2 {
  headerRow: string[];
  dataRows: Table_With_Checkboxes[];
}

@Component({
    moduleId: module.id,
    selector: 'managemedicine-cmp',
    templateUrl: 'managemedicine.component.html'
})

export class ManagemedicineComponent implements OnInit{

    public tableData1: TableData;

    ngOnInit(){
        // Init Tooltips
        // $('[rel="tooltip"]').tooltip();
        this.tableData1 = {
            headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['4','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
         };
         
    }
/*    getTotal(){
        var total = 0;
        for( var i = 0; i < this.tableData1.dataRows.length; i++ ){
            var integer = parseInt(this.tableData1.dataRows[i][8])
            total += integer;
        }
        return total;
    };*/
}