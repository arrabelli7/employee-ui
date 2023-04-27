import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-work-days-update',
  templateUrl: './work-days-update.component.html',
  styleUrls: ['./work-days-update.component.scss']
})
export class WorkDaysUpdateComponent implements OnInit {
  workDays?: number;
  disableUpdateBtn = true;
  constructor(private dialogRef: MatDialogRef<WorkDaysUpdateComponent>) { }

  ngOnInit(): void {
  }

  close(action: boolean = false) {
    this.dialogRef.close({action})
  }

  onChange(newValue: number) {
    console.log(newValue);
    if (newValue < 0 || newValue > 260) {
      this.disableUpdateBtn = true;
    } else {
      this.disableUpdateBtn = false;
    }
    
}

  update() {
    this.dialogRef.close({action: true, value: this.workDays})
  }

}
