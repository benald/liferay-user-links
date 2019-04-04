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

  // title: '';
  // linkTitle: '';

  private confirmModal: BsModalRef;

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

   openCreateLinkModal() {
    this.modalRef = this.modalService.show(LinkCreateComponent, { class: 'modal-lg' });
  }

  openEditLinkModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(LinkEditComponent, { class: 'modal-lg' });
    // this.router.navigateByUrl('/user-links/{{ link.id }}', { skipLocationChange: true });
  }

  openDeleteLinkModal() {
    this.modalRef = this.modalService.show(LinkDeleteComponent, {  });
  }

  openLinkSettingsModal() {
    this.modalRef = this.modalService.show(LinkSettingsComponent, { class: 'modal-xl' });
  }

  cancel() {
    this.confirmModal.hide();
  }

  // Delete Link
  deleteLink(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteLink(id).subscribe(data => {
        this.loadLinks();
      });
    }
  }

}
