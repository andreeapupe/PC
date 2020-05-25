import { TestBed } from '@angular/core/testing'

import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

describe('HttpService', () => {
  let service: HttpService
  let httpTestingController: HttpTestingController
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientModule, HttpClientTestingModule],
    })
    service = TestBed.inject(HttpService)

    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.get(HttpService)
    httpMock = TestBed.get(HttpTestingController)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should get the data successful', () => {
    service.getCertifications().subscribe((data: any) => {
      expect(data.certificationTitle).toBe('PMP')
    })

    const req = httpMock.expectOne(
      `https://cert-master.eu-gb.cf.appdomain.cloud/certifications`,
      'call to api'
    )
    expect(req.request.method).toBe('GET')

    req.flush({
      certificationTitle: 'PMP',
    })

    httpMock.verify()
  })
})
