import { Component, OnInit, Inject } from '@angular/core'
import { HttpService } from '../../http.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {
  requestId: number

  constructor(
    public httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.requestId = this.data.id
  }

  ngOnInit(): void {}

  delete() {
    this.httpService.deleteOwnRequest(this.requestId).subscribe((response) => {
      console.log(response)
    })
  }
}
