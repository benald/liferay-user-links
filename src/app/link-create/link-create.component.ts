import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.scss']
})
export class LinkCreateComponent implements OnInit {

  linkDetails = {  id: 0, url: '', title: '', linkType: '', linkUUid: 0,  linkTitle: '' };

  selectedValue: 'External';

  constructor(
    public restApi: RestApiService,
    public router: Router,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() { }

  decline(): void {
    this.modalRef.hide();
  }

  addLink() {
    this.restApi.createLink(this.linkDetails).subscribe((data: {}) => {
      this.router.navigate(['/user-links']);
    });
    this.modalRef.hide();
  }

}
