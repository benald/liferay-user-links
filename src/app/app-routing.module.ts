import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLinksComponent } from './user-links/user-links.component';

const routes: Routes = [
  { path: 'user-links', component: UserLinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
