import { Component, OnInit, Inject } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserLinksComponent } from '../user-links/user-links.component';

@Component({
  selector: 'app-link-delete',
  templateUrl: './link-delete.component.html',
  styleUrls: ['./link-delete.component.scss']
})
export class LinkDeleteComponent implements OnInit {

   message: string;
   linkObject: any;
   isEditMode: any;
   userLinksObject: UserLinksComponent;

   constructor(
     public restApi: RestApiService,
     public actRoute: ActivatedRoute,
     public router: Router,
     public bsModalRef: BsModalRef,
     private modalService: BsModalService,
     @Inject('ASSETURL') public ASSETURL
   ) {
   }

   ngOnInit() {
   }

   delete() {
    this.restApi.deleteLink(this.linkObject.id).subscribe(data => {});
    this.bsModalRef.hide();
    this.modalService.onHide.subscribe(() => this.userLinksObject.loadLinks());
   }
   decline(): void {
    this.message = 'Declined!';
    this.bsModalRef.hide();
    // window.location.reload();
  }
}
