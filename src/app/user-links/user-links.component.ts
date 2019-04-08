import { Component, OnInit } from '@angular/core';
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

  public show = false;
  public buttonName = 'Show';
  public showInfo = false;

  // Toggle Info Panel
  isCollapsed = false;

  constructor(
    public restApi: RestApiService,
    private modalService: BsModalService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadLinks();
  }

  // Toggle edit components
  toggleEditControls() {
    this.show = !this.show;
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
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

  // Open Create Link Modal
  openCreateLinkModal() {
    this.modalRef = this.modalService.show(LinkCreateComponent, { class: 'modal-lg modal-dialog-centered' });
  }

  // Open Edit Link Modal
  openEditLinkModal(linkId: any) {
    const initialState = {
      id: linkId
    };
    this.modalRef = this.modalService.show(LinkEditComponent, {initialState, class: 'modal-lg modal-dialog-centered'} );
  }

  // Open Delete Link Modal
  openDeleteLinkModal(linkId: any) {
    const initialState = {
      id: linkId
    };
    this.modalRef = this.modalService.show(LinkDeleteComponent, {initialState, class: 'modal-lg modal-dialog-centered'} );
  }

  // Open Link Settings Modal
  openLinkSettingsModal() {
    this.modalRef = this.modalService.show(LinkSettingsComponent, { class: 'modal-lg modal-dialog-centered' });
  }

  // Close Modal function
  cancel() {
    this.modalRef.hide();
  }

}
