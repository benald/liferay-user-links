
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-link-settings',
  templateUrl: './link-settings.component.html',
  styleUrls: ['./link-settings.component.scss']
})
export class LinkSettingsComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  linkData: any = {};
  modalSettings: BsModalRef;

  Link: any = [];

  constructor(
    public modalRef: BsModalRef,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.loadLinks();
  }

  // Get Links list
  loadLinks() {
    return this.restApi.getLinks().subscribe((data: {}) => {
      this.Link = data;
    });
  }

  // Update link data
  updateList() {
    // this.restApi.updateLink(this.id, this.linkData).subscribe(data => {
    //   this.router.navigate(['/user-links']);
    // });
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  deleteSelected(): void {
    this.modalRef.hide();
  }

}
