import { Component, OnInit, Inject } from '@angular/core'
import { HttpService } from 'src/app/http.service'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit {
  public statusFilter: string
  public quarterFilter: string
  constructor(
    public httpService: HttpService,
    public dialogRef: MatDialogRef<FilterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.statusFilter = data.filter
    this.quarterFilter = data.quarter
  }

  ngOnInit(): void {}

  public applyFilter() {
    this.dialogRef.close({
      status: !this.statusFilter ? '' : this.statusFilter,
      quarter: !this.quarterFilter ? '' : this.quarterFilter,
    })
  }
}
