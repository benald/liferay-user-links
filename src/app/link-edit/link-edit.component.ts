import { Component, OnInit, Inject } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { ModalComponent } from '../modal/modal.component';
import { AppConstants } from '../shared/constants';
import { UserLinksComponent } from '../user-links/user-links.component';

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
  userLinksObject: UserLinksComponent;
  bsModalRefLocalCopy: BsModalRef;

  // selectedValue: '';

  constructor(
    public restApi:       RestApiService,
    public actRoute:      ActivatedRoute,
    public router:        Router,
    public bsModalRef:    BsModalRef,
    private modalService: BsModalService,
    @Inject('ASSETURL') public ASSETURL
  ) { }

  ngOnInit() {
    this.restApi.getLink(this.id).subscribe((data: {}) => {
      this.linkData = data;
    });
    // creating a copy of bsModalRef
    this.bsModalRefLocalCopy = this.bsModalRef;
  }

   openModalWithComponent() {
    const initialState = {
      id2: this.id,
      linkData2: this.linkData,
      bsModalRefLinkEdit: this.bsModalRef,
      userLinksObjectInLinkEdit: this.userLinksObject,
      linkEditObject: this
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
  }
  hide () {
    this.bsModalRefLocalCopy.hide();
  }
}
