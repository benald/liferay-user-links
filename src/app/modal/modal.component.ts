import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppConstants } from '../shared/constants';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  id2: any;

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
    console.log(this.id2);
    console.log(this.linkData2);
  }
  
  loadLinks() {
    return this.restApi.getLinks().subscribe((data: {}) => {
      this.Link = data;
    });
  }
  

  confirm(): void {
    console.log(this.linkData2)
    this.message = 'Confirmed!';
    this.bsModalRef.hide();
    if (this.className === 'LinkEditComponent') {
      this.restApi.updateLink(this.id2, this.linkData2).subscribe(data => {
      })
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else if (this.className === 'LinkDeleteComponent') {
      this.restApi.deleteLink(this.id2).subscribe(data => {});
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  decline(): void {
    this.message = 'Declined!';
    this.bsModalRef.hide();
    window.location.reload();
  }
}
