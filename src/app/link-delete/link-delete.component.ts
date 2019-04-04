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

   id: any;
   message: string;
   linkData: any = {};

   constructor(
     public restApi: RestApiService,
     public actRoute: ActivatedRoute,
     public router: Router,
     public bsModalRef: BsModalRef,
     private modalService: BsModalService
   ) {
   }

   ngOnInit() {
     this.restApi.getLink(this.id).subscribe((data: {}) => {
       this.linkData = data;
     })
     setTimeout(() => {
       this.openDeleteLinkModal();
     }, 10);
   }

   openDeleteLinkModal() {
     const initialState = {
       id2: this.id,
       linkData2: this.linkData,
       className: 'LinkDeleteComponent'
     };
     this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
   }
}
