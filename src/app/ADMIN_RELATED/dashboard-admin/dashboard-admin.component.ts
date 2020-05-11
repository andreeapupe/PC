import { Component, OnInit } from '@angular/core'

import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  allCertifications: string[]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://cert-master.eu-gb.cf.appdomain.cloud/admin/requests')
      .subscribe(
        (data) => {
          this.allCertifications = data as string[]
          console.log(this.allCertifications)
        },
        (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      )
  }
}
