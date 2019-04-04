import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkCreateComponent } from './link-create/link-create.component';
import { LinkEditComponent } from './link-edit/link-edit.component';
import { UserLinksComponent } from './user-links/user-links.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-links' },
  { path: 'create-link', component: LinkCreateComponent },
  { path: 'user-links', component: UserLinksComponent },
  { path: 'link-edit/:id', component: LinkEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
