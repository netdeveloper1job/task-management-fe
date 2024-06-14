import { Component, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-delete-confirm-popup',
  templateUrl: './delete-confirm-popup.component.html',
  styleUrls: ['./delete-confirm-popup.component.scss'],
})
export class DeleteConfirmPopupComponent {
  onHidden: EventEmitter<string> = new EventEmitter();
  constructor(public bsModalRef: BsModalService) {}

  closeModal(result: string) {
    this.onHidden.emit(result);
    this.bsModalRef.hide();
  }
}
