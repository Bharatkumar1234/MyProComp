import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FetchDatService } from '../fetch-dat.service';

@Component({
  selector: 'app-customer-tables',
  templateUrl: './customer-tables.component.html',
  styleUrls: ['./customer-tables.component.css']
})
export class CustomerTablesComponent implements OnInit {
  @Input() receiveddata;

  customer;
  company;
  mergedObject
  mergedArray =[];
   
  DataCollect;


  constructor(private table: FetchDatService) { 
    this.customer = this.table.customer;
    this.company = this.table.company

  }

  ngOnInit(): void {
   
    for(let i = 0; i < this.company.length; i++){
      this.mergedObject = {
        ...this.company[i],
        ...this.customer[i]
      };
      this.mergedArray.push(this.mergedObject)
    }
    

  }

  ngDoCheck(): void {
   
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.receiveddata);
     
        this.mergedArray.forEach((value,index) => {
          if(value.companyName == this.receiveddata.companyName){
            this.DataCollect = value;
          }
        })
      }
    }