import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentMethod: number = 1;/** 1 => card,2 => google pay 3 => bank */
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
