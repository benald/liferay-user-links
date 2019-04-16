import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Refreshable } from '../shared/refreshable';
import { UserLinksComponent } from '../user-links/user-links.component';


@Component({
  selector: 'app-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.scss']
})

export class LinkCreateComponent implements OnInit, Refreshable {

 // model: any = {};

  @Input()

  linkDetails = {  id: 0,  linkType: 'External', url: '', title: '', linkUUid: 0,  linkTitle: '' };

  userLinksObject: UserLinksComponent;

  refresh() {
    this.restApi.getLinks().subscribe((data: {}) => {});
  }

  constructor(
    public restApi: RestApiService,
    public router: Router,
    private modalRef: BsModalRef,
    private modalService: BsModalService
  ) { }

  ngOnInit() { }

  addLink(dataLink) {
    this.restApi.createLink(this.linkDetails).subscribe((data: {}) => {
      this.modalRef.hide();
      this.modalService.onHide.subscribe(() => this.userLinksObject.loadLinks());
    });
  }

  decline(): void {
    this.modalRef.hide();
  }
}
