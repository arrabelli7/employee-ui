import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vacation-days-update',
  templateUrl: './vacation-days-update.component.html',
  styleUrls: ['./vacation-days-update.component.scss']
})
export class VacationDaysUpdateComponent implements OnInit {
  allowedVacationDays!: number;
  disableUpdateBtn: boolean = true;
  vacationDays?: number;

  constructor(private dialogRef: MatDialogRef<VacationDaysUpdateComponent>) { }

  ngOnInit(): void {
  }
  close(action: boolean = false) {
    this.dialogRef.close({action})
  }

  onChange(newValue: number) {
    console.log(newValue);
    if (newValue < 0 || newValue > this.allowedVacationDays) {
      this.disableUpdateBtn = true;
    } else {
      this.disableUpdateBtn = false;
    }
    
}

  update() {
    this.dialogRef.close({action: true, value: this.vacationDays})
  }


}
