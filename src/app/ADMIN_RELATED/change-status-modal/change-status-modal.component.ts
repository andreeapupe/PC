import { Component, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ApproveRejectModel } from 'src/app/models/approve-reject-model'
import { HttpService } from '../../http.service'

@Component({
  selector: 'app-change-status-modal',
  templateUrl: './change-status-modal.component.html',
  styleUrls: ['./change-status-modal.component.css'],
})
export class ChangeStatusModalComponent implements OnInit {
  status: ApproveRejectModel
  edit: boolean

  constructor(
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.status = this.data.body
      console.log(this.status)

      this.edit = this.data.edit
      console.log(data)
    }
  }

  ngOnInit(): void {}

  submitChanges(): void {
    let status = new ApproveRejectModel(
      this.data.body.id,
      this.data.body.status
    )

    this.httpService
      .adminPatchRequests(status)
      .subscribe((response) => console.log(response))
  }
}
