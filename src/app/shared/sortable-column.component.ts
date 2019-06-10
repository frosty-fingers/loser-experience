import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: '[sortable-column]',
  template: `
    <div *NgIf= ></div>
  `,
  styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent implements OnInit {

  constructor() { }

  @Input('sortable-column') columnName: string;

  @Input('sort-direction') sortDirection: string = '';

  @HostListener('click') sort() {
    this.sortDirection = this.sortDirectoin === 'asc' ? 'desc' : 'asc';
    console.log(`i am currently sorting: ${this.sortDirection}`);
  }

  ngOnInit() {
  }

}
