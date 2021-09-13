import { Component, OnInit } from '@angular/core';
import { USER_TABLE } from 'src/app/constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersObj: any[] = USER_TABLE;
  data:any =[
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    }
    ,
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    },
    {
      name:'John Mark',
      phone:'9876747665',
      totalAmount:1000,
      otp:1234
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
