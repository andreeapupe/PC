import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../http.service'
import { DeleteModalComponent } from 'src/app/USER_RELATED/delete-modal/delete-modal.component'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../filter-modal/filter-modal.component'
import { ApproveRejectModel } from 'src/app/models/approve-reject-model'
import { ChangeStatusModalComponent } from '../change-status-modal/change-status-modal.component'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  approverejectcopy: ApproveRejectModel
  allCertifications: string[]

  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.httpService.getAllRequests().subscribe((response) => {
      this.allCertifications = response as string[]
      console.log(this.allCertifications)
    })
  }

  deleteDialog(id: number) {
    const dialog = this.dialog.open(DeleteModalComponent, { data: { id: id } })
    console.log('The delete dialog was closed')

    dialog.afterClosed().subscribe((result) => {
      this.httpService.getAllRequests().subscribe((response) => {
        this.allCertifications = response as string[]
        console.log(this.allCertifications)
      })
    })
  }

  openDialogFilterModal() {
    const dialogRef = this.dialog.open(FilterModalComponent)

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService
        .filterRequestsByBoth(1, 'Pending')
        .subscribe((response) => {
          this.allCertifications = response
        })
    })
  }

  openDialogAcceptReject(id: number, status: string) {
    let approveObject: ApproveRejectModel = { id: id, status: status }
    const dialogRef = this.dialog.open(ChangeStatusModalComponent, {
      data: { body: approveObject },
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getAllRequests().subscribe((response) => {
        this.allCertifications = response
      })
    })
  }
}
