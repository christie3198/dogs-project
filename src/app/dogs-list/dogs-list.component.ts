import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DogsListService } from '../classes/dogs-list.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  dogsList: any;
  formName : FormGroup;
  updateFormName : FormGroup;
  messageTrue = false;
  messageUpdateTrue = false;

  constructor(
    public dogsListService: DogsListService,
    private fb: FormBuilder
  ) {
    this.formName = this.fb.group({
      dogId: [""],
      dogName: [""],
      dogBreed: [""]
    });
    this.updateFormName = this.fb.group({
      dogUpdateId: [""],
      dogUpdateName: [""],
      dogUpdateBreed: [""]
    });
   }

  ngOnInit(): void {
    this.dogsListService.getDogsList().subscribe(getData => {
      this.dogsList = getData;
    });
    
  }

  addNewData(formValue: any){
    const newDogData = {id: this.formName.value.dogId, name: this.formName.value.dogName, breed: this.formName.value.dogBreed };
    this.dogsListService.createDogDetails(newDogData).subscribe(postData => {
      console.log(postData);
      this.messageTrue = true;
    });
  }
  
  updateExistingData(formUpdateValue: any){
    const updateDogData = {id: this.updateFormName.value.dogUpdateId, name: "simmy", breed: "lab" };
    this.dogsListService.updateDogDetail(this.updateFormName.value.dogUpdateId, updateDogData).subscribe(updateData =>{
      console.log(updateData);
      this.messageUpdateTrue = true;

    })
  }

}
