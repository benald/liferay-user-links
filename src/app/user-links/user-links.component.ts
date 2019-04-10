import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { BsModalRef, BsModalService  } from 'ngx-bootstrap';
import { LinkCreateComponent } from './../link-create/link-create.component';
import { LinkEditComponent } from './../link-edit/link-edit.component';
import { LinkDeleteComponent } from './../link-delete/link-delete.component';
import { LinkSettingsComponent } from './../link-settings/link-settings.component';
import { Link } from '../shared/link';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss']
})

export class UserLinksComponent implements OnInit {

  Link: any = [];
  order: string = 'title';
 
  modalRef: BsModalRef;
  isCollapsed = false;

  public show = false;
  public buttonName = 'Show';
  public showInfo = false;

  constructor(
    public restApi: RestApiService,
    private modalService: BsModalService,
    public router: Router
  ) { 
  }

  ngOnInit() {
    this.loadLinks();
  }

  // 
  getLinkTitle() {
    if (this.Link.linkTitle !== ''){
      const myLinkTitle = this.Link.linkTitle;
      console.log(this.Link.linkTitle);
    } else {
      const myLinkTitle = this.Link.title;
      console.log(this.Link.title);
    } 
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
    // this.restApi.getLinks<Link[]>.pipe(map(data => data.sort()))
    return this.restApi.getLinks().subscribe((data: {}) => {
      this.Link = data;
      this.Link.sort((a,b) =>  this.sortBasedOnTitle(a,b));
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

  //modify the if else conditions as per your preference
  sortBasedOnTitle(a: Link, b: Link): number {
    if (a.title != null && b.title != null) {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    } else if (a.title != null && b.title == null && b.linkTitle != null) {
      return a.title.toLowerCase() > b.linkTitle.toLowerCase() ? 1 : -1;
    } else if (a.title == null && a.linkTitle != null && b.title != null) {
      return a.linkTitle.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
     } else if (a.title == null && a.linkTitle != null && b.title == null && b.linkTitle != null) {
      return a.linkTitle.toLowerCase() > b.linkTitle.toLowerCase() ? 1 : -1;
     }
  }
  // linksAvailable() {
  //   // if (this.Link != null ) {
  //   //   console.log(this.Link);
  //   //   return true;
  //   // }
  //    if (this.Link.length == 0) {
  //      console.log(this.Link.length);
  //     return true;
  //   }
  //   else return false;
  // }
 

}