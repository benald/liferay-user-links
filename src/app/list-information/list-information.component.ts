import { Component } from '@angular/core';
// import { RestApiService } from '../shared/rest-api.service';
import { Info } from '../shared/info';

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.scss']
})

export class ListInformationComponent {

  info: Info = {
    heading: 'User assist Heading',
    text: 'User assist paragraph'
  };

  constructor(
    // public restApi: RestApiService
  ) { }


}
