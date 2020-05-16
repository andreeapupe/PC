import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../http.service'
import { ReqModel } from '../../models/req-model'
import { CertificationsModel } from 'src/app/models/certifications-model'

@Component({
  selector: 'app-all-certifications',
  templateUrl: './all-certifications.component.html',
  styleUrls: ['./all-certifications.component.css'],
})
export class AllCertificationsComponent implements OnInit {
  requests: ReqModel[]
  allCertifications: CertificationsModel[]
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getCertifications().subscribe((response) => {
      this.requests = response
    })
  }
}
