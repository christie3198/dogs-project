import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  floatingInput: string = '';
  floatingTextarea: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  contactUsSubmit(formValue: NgForm){
    console.log(formValue.value);
    //validations
    //Data Processing
    //Then call API to save the data
  }

}
