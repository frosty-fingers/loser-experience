import { Component, OnInit, Input, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortService } from './sort/sort.service';

@Component({
  selector: '[sortable-column]',
  template: `
              <i class="fa fa-chevron-up" *ngIf="sortDirection === 'asc'"></i>
              <i class="fa fa-chevron-down" *ngIf="sortDirection === 'desc'"></i>
              <ng-content></ng-content>`,
})
export class SortableColumnComponent implements OnInit, OnDestroy {
  
  constructor(private sortService: SortService) { }

  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  private columnSortedSubscription: Subscription;

  @HostListener('click') sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
  }

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      if (this.columnName != event.sortColumn) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}
