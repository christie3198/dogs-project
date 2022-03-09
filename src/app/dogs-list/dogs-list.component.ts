import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DogsListService } from '../classes/dogs-list.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  dogsList: any;
  dogFormGroup : FormGroup;
  messageTrue = false;
  messageUpdateTrue = false;
  messageDeleteTrue = false;

  constructor(
    public dogsListService: DogsListService,
    private fb: FormBuilder
  ) {
    this.dogFormGroup = this.fb.group({
      dogId: [""],
      dogName: [""],
      dogBreed: [""]
    });
   }

  ngOnInit(): void {
    this.dogsListService.getDogsList().subscribe(getData => {
      this.dogsList = getData;
    });
    
  }

  addNewData(formValue: any){
    const newDogData = {id: this.dogFormGroup.value.dogId, name: this.dogFormGroup.value.dogName, breed: this.dogFormGroup.value.dogBreed };
    this.dogsListService.createDogDetails(newDogData).subscribe(postData => {
      console.log(postData);
      this.messageTrue = true;
    });
  }
  
  updateExistingData(formUpdateValue: any){
    const updateDogData = {id: this.dogFormGroup.value.dogId, name: this.dogFormGroup.value.dogName, breed: this.dogFormGroup.value.dogBreed };
    this.dogsListService.updateDogDetail(this.dogFormGroup.value.dogId, updateDogData).subscribe(updateData =>{
      console.log(updateData);
      this.messageUpdateTrue = true;
      
    })
  }

  deleteDataExistingData(formValue: any){
    this.dogsListService.deleteDogDetail(this.dogFormGroup.value.dogId).subscribe(deleteData => {
      console.log(deleteData);
      this.messageDeleteTrue = true;
    });
  }
  
}
