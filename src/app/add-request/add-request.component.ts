import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent implements OnInit {
  Requests: string[]
  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://cert-master.eu-gb.cf.appdomain.cloud/certifications')
      .subscribe(
        (data) => {
          this.Requests = data as string[]
          console.log(this.Requests)
        },
        (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      )
  }

  getResponse() {
    console.log('Da')
  }
}
