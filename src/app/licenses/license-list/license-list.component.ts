import { Component, OnInit } from '@angular/core';
import { License } from '../license';
import { SortService, ColumnSortedEvent } from 'src/app/shared/sort/sort.service';
import { LicenseService } from '../license.service';


@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit {
  pageTitle: string = 'Licenses';
  constructor(private licenseService: LicenseService) {}

  errorMessage: string;

  licenses: License[];
  sortedLicenses: License[];  

  /* _listSorter: ColumnSortedEvent;
  get listSorter(): ColumnSortedEvent{
    return this._listSorter;
  }
  set listSorter(value: ColumnSortedEvent) {
    this._listSorter = value;
    this.sortedLicenses = this.listSorter ? this.performSort(this.listSorter) : this.licenses;
  }

  performSort(columnSortedEvent: ColumnSortedEvent): License[] {
    let sortColumn = columnSortedEvent.sortColumn;
    let sortDirection = columnSortedEvent.sortDirection;
    if sortColumn instanceof string
      return this.licenses.sort((a: License, b: License) => 
      JSON.stringify(a[sortColumn]).localeCompare(JSON.stringify(b[sortColumn]));
  }
 */

  

  ngOnInit(): void {
    this.licenseService.getLicenses().subscribe(
      licenses => {
        this.licenses = licenses;
      },
      error => this.errorMessage = <any>error
    );
  }

}
