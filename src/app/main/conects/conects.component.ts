import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-conects',
  templateUrl: './conects.component.html',
  styleUrls: ['./conects.component.css']
})
export class ConectsComponent implements OnInit {
  @ViewChild('addPersonTemplate') addPersonModal:TemplateRef<any>;
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD','ELO_DEBIT','ELECTRON']
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
    private modalService:ModalService
  ) { }

  ngOnInit(): void {
  }

  onLoadPaymentData = (event: Event): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('Event detail', eventDetail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (patmentData) => {
    console.log('Payment Authorized: ', patmentData);
    return {
      transactionState: 'SUCCESS'
    }
  }

  onError = (event: ErrorEvent): void => {
    console.error(event);
  }

  onOpenAddPerson(){
    this.modalService.openModal(this.addPersonModal,{},'sm')
  }

}
