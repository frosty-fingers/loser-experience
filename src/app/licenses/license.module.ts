import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseListComponent } from './license-list/license-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LicenseListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LicenseModule { }
