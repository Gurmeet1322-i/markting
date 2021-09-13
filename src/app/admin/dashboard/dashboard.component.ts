import { Component, OnInit } from '@angular/core';
import { PAYMENT_REQUEST_TABLE, TableHeaders } from 'src/app/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headerObjs: TableHeaders[] = PAYMENT_REQUEST_TABLE;
  data:any[] =[
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      widhrawAmount:300
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
