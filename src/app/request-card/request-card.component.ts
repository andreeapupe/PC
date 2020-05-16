import { Component, OnInit } from '@angular/core'
import { HttpService } from '../http.service'
import { CertificationsModel } from '../models/certifications-model'
import { MatDialog } from '@angular/material/dialog'
import { AddRequestComponent } from '../USER_RELATED/add-request/add-request.component'
import { DeleteModalComponent } from '../USER_RELATED/delete-modal/delete-modal.component'
import { PatchModel } from '../models/patch-model'

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css'],
})
export class RequestCardComponent implements OnInit {
  arrCertifications: CertificationsModel[]

  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.httpService.getUsersRequests(3).subscribe((response) => {
      this.arrCertifications = response
    })
  }

  openDialogNewRequest() {
    const dialogRef = this.dialog.open(AddRequestComponent)

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getUsersRequests(3).subscribe((response) => {
        this.arrCertifications = response
      })
    })
  }

  openDialogEdit(req: PatchModel) {
    const dialogRef = this.dialog.open(AddRequestComponent, {
      data: { body: req, edit: true },
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getUsersRequests(3).subscribe((response) => {
        this.arrCertifications = response
      })
    })
  }

  deleteDialog(id: number) {
    const dialog = this.dialog.open(DeleteModalComponent, { data: { id: id } })
    console.log('The delete dialog was closed')

    dialog.afterClosed().subscribe((result) => {
      this.httpService.getUsersRequests(3).subscribe((response) => {
        this.arrCertifications = response
      })
    })
  }
}
