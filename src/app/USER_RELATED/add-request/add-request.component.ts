import { Component, OnInit } from '@angular/core'
import { ReqModel } from '../../req-model'
import { HttpService } from '../../http.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent implements OnInit {
  requestForm: FormGroup
  requests: ReqModel[]
  constructor(
    private httpService: HttpService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      title: ['', Validators.required],
      justification: ['', Validators.required],
    })

    this.httpService.getCertifications().subscribe((response) => {
      this.requests = response
    })
  }

  submitRequest(): void {
    if (this.requestForm.valid) {
      let request = new ReqModel(
        this.requestForm.controls['title'].value,
        3,
        this.requestForm.controls['justification'].value
      )

      this.httpService
        .postRequest(request)
        .subscribe((response) => console.log(response))
    }
  }
}
