import { Component, OnInit, TemplateRef } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { BsModalRef, BsModalService  } from 'ngx-bootstrap';
import { LinkCreateComponent } from './../link-create/link-create.component';
import { LinkEditComponent } from './../link-edit/link-edit.component';
import { LinkDeleteComponent } from './../link-delete/link-delete.component';
import { LinkSettingsComponent } from './../link-settings/link-settings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss']
})
export class UserLinksComponent implements OnInit {

  Link: any = [];
  modalRef: BsModalRef;

  // Toggle Info Panel
  isCollapsed = true;
  isOpen = false;

  constructor(
    public restApi: RestApiService,
    private modalService: BsModalService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadLinks();
  }

  // Get Links list
  loadLinks() {
    return this.restApi.getLinks().subscribe((data: {}) => {
      this.Link = data;
    });
  }

  // Delete Link
  deleteLink(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteLink(id).subscribe(data => {
        this.loadLinks();
      });
    }
  }

  openCreateLinkModal() {
    this.modalRef = this.modalService.show(LinkCreateComponent, { class: 'modal-lg modal-dialog-centered' });
  }

  openEditLinkModal(linkId: any) {
    const initialState = {
      id: linkId
    };
    this.modalRef = this.modalService.show(LinkEditComponent, {initialState, class: 'modal-lg modal-dialog-centered'} );
  }

  openDeleteLinkModal(linkId: any) {
    const initialState = {
      id: linkId
    };
    this.modalRef = this.modalService.show(LinkDeleteComponent, {initialState, class: 'modal-lg modal-dialog-centered'} );
  }

  openLinkSettingsModal() {
    this.modalRef = this.modalService.show(LinkSettingsComponent, { class: 'modal-lg modal-dialog-centered' });
  }

  cancel() {
    this.modalRef.hide();
  }

}
