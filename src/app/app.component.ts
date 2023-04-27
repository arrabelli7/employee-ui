import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VacationDaysUpdateComponent } from './dialog/vacation-days-update/vacation-days-update.component';
import { WorkDaysUpdateComponent } from './dialog/work-days-update/work-days-update.component';
import { EmployeeServiceService } from './services/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'employee-ui';
  displayedColumns: string[] = ['employeeID', 'workDays', "vacationDays", "action"];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private employeeServiceService: EmployeeServiceService, private dialog: MatDialog) {
    
  }
  ngOnInit(): void {
    this.getListOfEmployees()
  }

  getListOfEmployees() {
    this.employeeServiceService.getList().subscribe((resp) => {
      console.log(resp);
      const employees: any = [];
      resp.forEach((element: any, index: number) => {
        employees.push({
          employeeID: index,
          vacationDays: element.vacationDays
        })
      });
      this.dataSource = new MatTableDataSource(employees);
    })
  }

  updateWorkDays(employeeID: number) {
    const workDialog = this.dialog.open(WorkDaysUpdateComponent, {
      width: '400px'
    })
    workDialog.afterClosed().subscribe((resp) => {
      if (resp.action) {
        this.employeeServiceService.updateWorkDays(employeeID, resp.value).subscribe((resp) => {
          this.getListOfEmployees();
        })
      }
    })
  }
  updateVacationDays(employee: any) {
    const workDialog = this.dialog.open(VacationDaysUpdateComponent, {
      width: '400px'
    })
    workDialog.componentInstance.allowedVacationDays = employee.vacationDays;
    workDialog.afterClosed().subscribe((resp) => {
      if (resp.action) {
        this.employeeServiceService.updateVacationDays(employee.employeeID, resp.value).subscribe((resp) => {
          this.getListOfEmployees();
        })
      }
    })
  }

}
