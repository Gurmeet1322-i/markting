import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class ModalService {
    modal: any;
    constructor(private ngModal: NgbModal) { }
    openModal(component: any, data?: any, size?: any) {
        this.modal = this.ngModal.open(component, {
            size: size ? size : 'md',
            centered: true,
            backdrop: 'static',
            windowClass: 'model-popup',
            keyboard: true,
            animation: true
        });
        if (data) {
            Object.keys(data).forEach(key => {
                this.modal.componentInstance[key] = data[key];
            });
        }
    }

    // function to close a modal/popup
    closeModal(value?) {
        this.modal.close();
    }
}