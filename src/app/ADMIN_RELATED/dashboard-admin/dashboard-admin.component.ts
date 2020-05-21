import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../http.service'
import { DeleteModalComponent } from 'src/app/USER_RELATED/delete-modal/delete-modal.component'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../filter-modal/filter-modal.component'
import { ApproveRejectModel } from 'src/app/models/approve-reject-model'
import { ChangeStatusModalComponent } from '../change-status-modal/change-status-modal.component'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  approverejectcopy: ApproveRejectModel
  allCertifications: string[]
  public downloadLink: string
  public filterStatus: string = ''
  public filterQuarter: string = ''

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.httpService.getAllRequests('', '').subscribe((response) => {
      this.allCertifications = response as string[]
      console.log(this.allCertifications)
    })
    this.getDownloadLink()
  }

  openExcelSnackBar() {
    this.snackBar.open('Your download will begin in a moment', 'Dismiss', {
      duration: 3000,
    })
  }

  getDownloadLink() {
    this.downloadLink =
      'https://cert-master.eu-gb.cf.appdomain.cloud/admin/requests/excel' +
      (this.filterStatus != '' || this.filterQuarter != '' ? '?' : '') +
      (this.filterStatus != '' ? 'status=' + this.filterStatus : '') +
      (this.filterStatus != '' && this.filterQuarter != '' ? '&' : '') +
      (this.filterQuarter != '' ? 'quarter=' + this.filterQuarter : '')
  }

  deleteDialog(id: number) {
    const dialog = this.dialog.open(DeleteModalComponent, { data: { id: id } })
    console.log('The delete dialog was closed')

    dialog.afterClosed().subscribe((result) => {
      this.httpService.getAllRequests('', '').subscribe((response) => {
        this.allCertifications = response as string[]
        console.log(this.allCertifications)
      })
    })
  }

  openDialogFilterModal() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      data: { status: this.filterStatus, quarter: this.filterQuarter },
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        this.filterQuarter = result.quarter
        this.filterStatus = result.status
        this.getDownloadLink()
        this.httpService
          .getAllRequests(result.status, result.quarter)
          .subscribe((response) => {
            this.allCertifications = response
          })
      }
    })
  }

  openDialogAcceptReject(id: number, status: string) {
    let approveObject: ApproveRejectModel = { id: id, status: status }
    const dialogRef = this.dialog.open(ChangeStatusModalComponent, {
      data: { body: approveObject },
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getAllRequests('', '').subscribe((response) => {
        this.allCertifications = response
      })
    })
  }
}
