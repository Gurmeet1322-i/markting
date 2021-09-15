import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from 'src/app/constants';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-conects',
  templateUrl: './conects.component.html',
  styleUrls: ['./conects.component.css']
})
export class ConectsComponent implements OnInit {
  addPersonFrom: FormGroup;
  @ViewChild('addPersonTemplate') addPersonModal: TemplateRef<any>;
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD', 'ELO_DEBIT', 'ELECTRON']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {

            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'INR',
      countryCode: 'IN'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };
  constructor(
    private modalService: ModalService,
    private fb: FormBuilder
  ) {
    this.addPersonFrom = this.fb.group({
      userName: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(REGEX.PHONE)])],
      payment: [false]
    })
  }

  ngOnInit(): void {
  }

  onLoadPaymentData = (event: Event): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('Event detail', eventDetail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (patmentData) => {
    return {
      transactionState: 'SUCCESS'
    }
  }

  onError = (event: ErrorEvent): void => {
    console.error(event);
  }

  onOpenAddPerson() {
    this.modalService.openModal(this.addPersonModal, {}, 'sm')
  }

  submit() {
    if(this.addPersonFrom.valid){
      console.log(this.addPersonFrom.value);
    }else{
      Object.keys(this.addPersonFrom.controls).forEach(key=>{
        this.addPersonFrom.controls[key].markAsTouched({
          onlySelf:true
        })
      })
    }
  }

  closeModal() {
    this.addPersonFrom?.reset();
    this.modalService.closeModal();
  }

}
