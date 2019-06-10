import { Component, OnInit } from '@angular/core';
import { License } from '../license';
import { SortService, ColumnSortedEvent } from 'src/app/shared/sort/sort.service';


@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit {
  pageTitle: string = 'Licenses';
  licenses: License[] = [
    {
        "createdBy": "James Volis",
        "createdOnUtc": "2019-04-23T18:25:43.511Z",
        "customerCode": "JVOL",
        "expiresAfterDays": 365,
        "expiresOnUtc": "2020-04-23T18:25:43.511Z",
        "id": 1,
        "licenseeName": "J.P.Volis",
        "licenseeOrganisation": "Jamesocentric",
        "licenseIdentifier": "54321",
        "productCode": "12345",
        "productName": "James's app",
        "productReleaseVersion": "8.1.0"
    },
    {
        "createdBy": "James Volis",
        "createdOnUtc": "2018-04-23T18:25:43.511Z",
        "customerCode": "JVOL",
        "expiresAfterDays": 365,
        "expiresOnUtc": "2019-04-23T18:25:43.511Z",
        "id": 2,
        "licenseeName": "J.P.Volis",
        "licenseeOrganisation": "Jamesoferic",
        "licenseIdentifier": "69789",
        "productCode": "98798",
        "productName": "James's other app",
        "productReleaseVersion": "4.1.0"
    },
    {
        "createdBy": "James Volis",
        "createdOnUtc": "2019-04-23T18:25:43.511Z",
        "customerCode": "JVOL",
        "expiresAfterDays": 365,
        "expiresOnUtc": "2020-04-23T18:25:43.511Z",
        "id": 3,
        "licenseeName": "J.P.Volis",
        "licenseeOrganisation": "Jamesocentric",
        "licenseIdentifier": "54321",
        "productCode": "12345",
        "productName": "James's app",
        "productReleaseVersion": "8.1.0"
    }
  ];
  sortedLicenses: License[];  

  _listSorter: ColumnSortedEvent;
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

  constructor(private sortService: SortService) {}

  ngOnInit() {

  }

}
