import { Component } from '@angular/core';

@Component({
  selector: 'app-list-information',
  template: '<h3>{{infoHeading}}</h3><p>{{infoText}}</p>',
  styleUrls: ['./list-information.component.scss']
})
export class ListInformationComponent {
  infoHeading = '';
  infoText = 'You currently don’t have any items saved to ‘My Links’.';

}
