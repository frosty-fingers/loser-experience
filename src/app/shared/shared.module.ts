import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableColumnComponent } from './sortable-column.component';
import { SortableTableDirective } from './sort/sortable-table.directive';

@NgModule({
  declarations: [SortableColumnComponent, SortableTableDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SortableColumnComponent,
    SortableTableDirective
  ]
})
export class SharedModule { }
