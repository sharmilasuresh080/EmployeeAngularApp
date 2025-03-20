import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model'; 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees :Employee []= [
    { name: 'Malini', email: 'malini123@gmail.com', position: 'Developer', salary: 60000 },
    { name: 'Prayuktha', email: 'prayu23@gmail.com', position: 'Scientist', salary: 45000 }
  ];
  selectedEmployee!: Employee;
  notification: string= '';

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  receiveNotification(message: string) {
    console.log('Received notification:', message);
    this.notification = message; 
  }
}


