import { Component, OnInit } from '@angular/core';
import {Employee } from '../employee';
import { employeeList  } from '../employee-list';
import { EmployeeService } from '../employee.service';

 

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employee : Employee = 
  {
"id" : 1 ,
"name" : "Ashif Rahman",
"school" : " KGHS",
"contact": 333
  }




 


  employes : any;
  ngOnInit(): void {
    this.employes = employeeList;
    this.getEmployee();
  }
   
  
 


   selected_employee: any;
  SelectedEmployee(employee :Employee)
  {
   this.selected_employee = employee;
   console.log(employee);

  }

  constructor( private employeeService: EmployeeService ) 
  {  }


  val : any;

  getEmployee()
  {
    this.employeeService.getEmployee().subscribe(res=>this.val=res);
   // this.val = this.employeeService.getEmployee();

  }


}
