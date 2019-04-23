import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, CollapseModule, SortableModule, TooltipModule  } from 'ngx-bootstrap';
import { OrderModule } from 'ngx-order-pipe';
import { APP_BASE_HREF } from '@angular/common';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { LinkEditComponent } from './link-edit/link-edit.component';
import { LinkCreateComponent } from './link-create/link-create.component';
import { UserLinksComponent } from './user-links/user-links.component';
import { ListInformationComponent } from './list-information/list-information.component';
import { LinkDeleteComponent } from './link-delete/link-delete.component';
import { LinkSettingsComponent } from './link-settings/link-settings.component';
import { ExternalUrlDirective } from './shared/external-url.directive';
import { ModalComponent } from './modal/modal.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserLinksComponent,
    LinkEditComponent,
    LinkCreateComponent,
    UserLinksComponent,
    ListInformationComponent,
    LinkDeleteComponent,
    LinkSettingsComponent,
    ExternalUrlDirective,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    SortableModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }, 
    {provide: 'APIURL', useValue: environment.apiUrl },
    {provide: 'ASSETURL', useValue: environment.assetUrl } 
  ],
  bootstrap: [
    AppComponent,
    ModalComponent,
    ListInformationComponent,
    LinkCreateComponent,
    LinkEditComponent,
    LinkDeleteComponent,
    LinkSettingsComponent
  ],
  exports: [ModalComponent]
})

export class AppModule { }
