import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../http.service'
import { DeleteModalComponent } from 'src/app/USER_RELATED/delete-modal/delete-modal.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
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
}
