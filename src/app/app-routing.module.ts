import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenseListComponent } from './licenses/license-list/license-list.component';


const routes: Routes = [
  { path: 'licenses', component: LicenseListComponent },
  { path: '', redirectTo: '/licenses', pathMatch: 'full'},
  { path: '**', redirectTo: '/licenses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
