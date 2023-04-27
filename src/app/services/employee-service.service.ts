import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  BASE_URL: string = "http://localhost:8080/";
  constructor(private httpService: HttpService) { }

  getList() {
    return this.httpService.send(`${this.BASE_URL}employees`,"get").pipe(
      map((data) => {
        return data as any;
      }));
  }
  updateWorkDays(employeeID: number, value: any) {
    return this.httpService.send(`${this.BASE_URL}employees/${employeeID}/work/${value}`, "put", {}).pipe(
      map((data) => {
        return data as any;
      }));
  }

  updateVacationDays(employeeID: number, value: any) {
    return this.httpService.send(`${this.BASE_URL}employees/${employeeID}/vacation/${value}`, "put", {}).pipe(
      map((data) => {
        return data as any;
      }));
  }
}
