import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLinksComponent } from './user-links/user-links.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-links' },
  { path: 'user-links', component: UserLinksComponent },
  { path: 'user-links/:id', component: UserLinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
