import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, CollapseModule, SortableModule, TooltipModule  } from 'ngx-bootstrap';
import { OrderModule } from 'ngx-order-pipe';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    SortableModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
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
