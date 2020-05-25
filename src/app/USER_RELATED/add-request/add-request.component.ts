import { Component, OnInit, Inject } from '@angular/core'
import { ReqModel } from '../../models/req-model'
import { HttpService } from '../../http.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CertificationsModel } from 'src/app/models/certifications-model'
import { PatchModel } from 'src/app/models/patch-model'

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent implements OnInit {
  requestForm: FormGroup
  requests: ReqModel[]
  request: CertificationsModel
  edit: boolean
  editForm: FormGroup
  public quarter: string

  constructor(
    private httpService: HttpService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.request = this.data.body
      console.log(this.request)

      this.edit = this.data.edit
      console.log(data)
    }
  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      title: ['', Validators.required],
      justification: ['', Validators.required],
    })

    if (this.edit) {
      this.editForm = this.formBuilder.group({
        title: [
          { value: this.request.certificationTitle, disabled: this.edit },
        ],
        justification: [
          this.request.businessJustification.toString(),
          Validators.required,
        ],
      })
      console.log(typeof this.request.businessJustification)
    }

    this.httpService.getCertifications().subscribe((response) => {
      this.requests = response
    })
  }

  submitRequest(): void {
    if (this.requestForm.valid) {
      let request = new ReqModel(
        this.requestForm.controls['title'].value.id,
        5,
        this.requestForm.controls['justification'].value
      )

      this.httpService
        .postRequest(request)
        .subscribe((response) => console.log(response))
    }
  }

  submitChanges(): void {
    if (this.editForm.valid) {
      let request = new PatchModel(
        this.data.body.requestId,
        this.editForm.controls['justification'].value
      )

      this.httpService
        .updateUserRequest(request)
        .subscribe((response) => console.log(response))
    }
  }
  public showQuarter() {
    this.quarter = this.requestForm.controls['title'].value.quarter
    console.log(this.requestForm.controls['title'].value.quarter)
  }
}
