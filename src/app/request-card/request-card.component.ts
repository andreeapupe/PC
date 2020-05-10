import { Component, OnInit } from '@angular/core'
import { HttpService } from '../http.service'
import { CertificationsModel } from '../certifications-model'

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css'],
})
export class RequestCardComponent implements OnInit {
  arrCertifications: CertificationsModel[]

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getInfo(3).subscribe((response) => {
      this.arrCertifications = response
    })
  }
}
