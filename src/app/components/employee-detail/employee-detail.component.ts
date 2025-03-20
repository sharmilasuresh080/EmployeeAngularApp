import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee.model'; 
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  @Input() employee!: Employee;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  notifyParent() {
    if (this.employee) {
      this.notify.emit(`Employee ${this.employee.name} selected`);
    } else {
      this.notify.emit(`No employee selected`);
    }
  }
}
