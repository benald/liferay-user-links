import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-link-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.scss']
})

export class LinkEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  // id = this.id;

  linkData: any = {};

  selectedValue: '';

  constructor(
    public bsModalRef: BsModalRef,
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    console.log(this.id);
    this.restApi.getLink(this.id).subscribe((data: {}) => {
      this.linkData = data;
    });
  }

  // Update link data
  updateLink() {
    this.restApi.updateLink(this.id, this.linkData).subscribe(data => {
        this.router.navigate(['/user-links']);
      });
  }
  decline(): void {
    this.bsModalRef.hide();
  }
}
