import { Component, OnInit } from '@angular/core';
import { FetchDatService } from '../fetch-dat.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
users;
  store;
  viewdetails = true;
  sendCompany: any;
  constructor(private data: FetchDatService) { }

  ngOnInit(): void {
    this.store = this.data.company
  }
  convert(company) {
    this.sendCompany = company;
    

  }
}
