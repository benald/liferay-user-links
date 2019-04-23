import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RestApiService } from '../shared/rest-api.service';
import { UserLinksComponent } from '../user-links/user-links.component';
import { LinkEditComponent } from '../link-edit/link-edit.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  id2: any;
  bsModalRefLinkEdit: BsModalRef;
  userLinksObjectInLinkEdit: UserLinksComponent;
  linkEditObject: LinkEditComponent;

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    public restApi: RestApiService
  ) { }

  message: string;
  linkData2: any = {};
  className: any;
  Link: any = [];

  ngOnInit() {
    console.log(this.bsModalRefLinkEdit);
  }

  loadLinks() {
    return this.restApi.getLinks().subscribe((data: {}) => {
      this.Link = data;
    });
  }

  confirm(): void {
    console.log(this.bsModalRefLinkEdit);
    this.message = 'Confirmed!';
    this.restApi.updateLink(this.id2, this.linkData2).subscribe(data => {});
    this.bsModalRef.hide();
    // hiding the previous modal
    this.linkEditObject.hide();
    this.modalService.onHide.subscribe(() => this.userLinksObjectInLinkEdit.loadLinks());
  
  }

  decline(): void {
    this.message = 'Declined!';
    this.bsModalRef.hide();
  }

}
