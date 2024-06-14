import { Component, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent {
  onHidden: EventEmitter<string> = new EventEmitter();
  headerBody: string
  constructor(public bsModalRef: BsModalService) {}

  closeModal(result: string) {
    this.onHidden.emit(result);
    this.bsModalRef.hide();
  }
}
