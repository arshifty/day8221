import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  registrationForm = new FormGroup(  
   { 
    userName : new FormControl('Ashif Rahman') , 
    val : new FormControl(''),
    password : new FormControl(''),
    confirmPassword: new FormControl(''),
    
   address : new FormGroup(
  {
   city : new FormControl(''),
   country : new FormControl(''),
   code : new FormControl('')
   
  } 
  )

    }   
    );

  


 


}
