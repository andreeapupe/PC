import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css'],
})
export class RequestCardComponent implements OnInit {
  arrCertifications: string[]

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://cert-master.eu-gb.cf.appdomain.cloud/requests?user_id=3')
      .subscribe(
        (data) => {
          this.arrCertifications = data as string[]
          console.log(this.arrCertifications)
        },
        (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      )
  }
}
