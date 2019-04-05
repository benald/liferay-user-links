import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { ModalComponent } from '../modal/modal.component';
import { AppConstants } from '../shared/constants';

@Component({
  selector: 'app-link-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.scss']
})

export class LinkEditComponent implements OnInit {

  // id = this.actRoute.snapshot.params['id'];
  id: any;
  message: string;
  linkData: any = {};

  // selectedValue: '';

  constructor(
    public restApi:       RestApiService,
    public actRoute:      ActivatedRoute,
    public router:        Router,
    public bsModalRef:    BsModalRef,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.restApi.getLink(this.id).subscribe((data: {}) => {
      this.linkData = data;
    });
  }

   openModalWithComponent() {
    const initialState = {
      id2: this.id,
      linkData2: this.linkData,
      className: 'LinkEditComponent'
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
  }
}
