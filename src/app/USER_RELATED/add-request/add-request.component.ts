import { Component, OnInit, Inject } from '@angular/core'
import { ReqModel } from '../../req-model'
import { HttpService } from '../../http.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CertificationsModel } from 'src/app/certifications-model'
import { PatchModel } from 'src/app/patch-model'

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

  constructor(
    private httpService: HttpService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.request = this.data.body
      console.log(this.request)

      this.edit = this.data.edit
    }
  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      title: [
        /*
        { value: this.request.certificationTitle, disabled: this.edit }*/ '',
        Validators.required,
      ],
      justification: [
        /*{ value: '', disabled: this.edit }*/ '',
        Validators.required,
      ],
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

  submitChanges(): void {
    let request: PatchModel

    this.httpService
      .updateUserRequest(request.id)
      .subscribe((response) => console.log(response))
  }
}
