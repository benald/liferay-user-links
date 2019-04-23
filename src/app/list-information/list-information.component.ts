import { Component, Inject } from '@angular/core';
// import { RestApiService } from '../shared/rest-api.service';
import { Info } from '../shared/info';

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.scss']
})

export class ListInformationComponent {

  info: Info = {
    heading: 'User assist heading text',
    text: 'Placeholder text for the user assist information that will be supplied by the business area.'
  };

  constructor(
    @Inject('ASSETURL') public ASSETURL
  ) { }


}
