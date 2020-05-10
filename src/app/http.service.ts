import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ReqModel } from './req-model'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  getInfo(userId: number): Observable<any> {
    return this.http.get(
      'https://cert-master.eu-gb.cf.appdomain.cloud/requests?user_id=' + userId
    )
  }

  getCertifications(): Observable<any> {
    return this.http.get(
      'https://cert-master.eu-gb.cf.appdomain.cloud/certifications'
    )
  }

  postRequest(certification: ReqModel): Observable<any> {
    return this.http.post(
      'https://cert-master.eu-gb.cf.appdomain.cloud/requests',
      certification,
      { headers: { 'Content-Type': 'application/json' } }
    )
  }
}
