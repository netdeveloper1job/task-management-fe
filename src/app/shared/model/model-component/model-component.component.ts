import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrls: ['./model-component.component.scss']
})
export class ModelComponentComponent {
  constructor(
    public modalRef: BsModalRef
  ) { }
}
