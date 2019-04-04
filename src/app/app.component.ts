import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { LinkCreateComponent } from './link-create/link-create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'user-links';
  bsModalRef: BsModalRef;

  constructor (
    private modalService: BsModalService
  ) {}

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(LinkCreateComponent);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
}
