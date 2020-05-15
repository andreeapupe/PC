import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../http.service'
import { DeleteModalComponent } from 'src/app/USER_RELATED/delete-modal/delete-modal.component'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../filter-modal/filter-modal.component'
import { ApproveRejectModel } from 'src/app/approve-reject-model'

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
  /*
  submitRequest(): void {
    let apprej: ApproveRejectModel

    this.httpService
      .adminPatchRequests(apprej, 22)
      .subscribe((response) => console.log(response))
  }
  */
}
