import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Refreshable } from '../shared/refreshable';

@Component({
  selector: 'app-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.scss']
})
export class LinkCreateComponent implements OnInit, Refreshable {

   @Input()  linkDetails = {  id: 0, url: '', title: '', linkType: '', linkUUid: 0,  linkTitle: '' };

   refresh() {
    this.restApi.getLinks().subscribe((data: {}) => {
      // this.Employee = data;
    });
  }

  constructor(
    public restApi: RestApiService,
    public router: Router,
    private modalService: BsModalService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit() { }

  addLink(dataLink) {
    this.restApi.createLink(this.linkDetails).subscribe((data: {}) => {
      this.modalRef.hide();
      window.location.reload();
    });
  }

  decline(): void {
    this.modalRef.hide();
  }
}
