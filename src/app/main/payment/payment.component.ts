import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentMethod:number = 1;/** 1 => card,2 => google pay 3 => bank */
  constructor() { }

  ngOnInit(): void {
  }

}
