import { Component } from '@angular/core';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BoldTextDirective } from './directives/bold-text.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeListComponent, HighlightDirective, BoldTextDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagementSystemApp';
}
