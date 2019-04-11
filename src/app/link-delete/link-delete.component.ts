import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-link-delete',
  templateUrl: './link-delete.component.html',
  styleUrls: ['./link-delete.component.scss']
})
export class LinkDeleteComponent implements OnInit {

   message: string;
   linkObject: any;

   constructor(
     public restApi: RestApiService,
     public actRoute: ActivatedRoute,
     public router: Router,
     public bsModalRef: BsModalRef,
     private modalService: BsModalService
   ) {
   }

   ngOnInit() {
   }

   delete() {
    this.restApi.deleteLink(this.linkObject.id).subscribe(data => {});
    setTimeout(() => {
      window.location.reload();
    }, 10);
   }
   decline(): void {
    this.message = 'Declined!';
    this.bsModalRef.hide();
    window.location.reload();
  }
}
