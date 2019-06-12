import { Component, OnInit } from '@angular/core';
import { License } from '../license';
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
  

  

  ngOnInit(): void {
    this.licenseService.getLicenses().subscribe(
      licenses => {
        this.licenses = licenses;
      },
      error => this.errorMessage = <any>error
    );
  }

}
