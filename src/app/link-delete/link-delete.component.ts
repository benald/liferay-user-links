import { Component  } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-link-delete',
  templateUrl: './link-delete.component.html',
  styleUrls: ['./link-delete.component.scss']
})
export class LinkDeleteComponent {

  Link: any = [];

  linkData: any = {};

  constructor(
    public bsModalRef: BsModalRef,
    public restApi: RestApiService
  ) { }

  // Get Links list
  loadLinks() {
    return this.restApi.getLinks().subscribe((data: {}) => {
      this.Link = data;
    });
  }

  // Delete Link
  deleteLink(id) {
    this.restApi.deleteLink(id).subscribe(data => {
      this.loadLinks();
    });
    this.bsModalRef.hide();
  }

  decline(): void {
    this.bsModalRef.hide();
  }

}
