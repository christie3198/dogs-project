import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private fb: FormBuilder,
    public changeDetector: ChangeDetectorRef
  ) {
    this.dogFormGroup = this.fb.group({
      dogId: [""],
      dogName: [""],
      dogBreed: [""]
    });
   }

  ngOnInit(): void {
    this.dogsListService.getDogsList().subscribe(getData => {
      console.log(getData)
      this.dogsList = getData;
      this.changeDetector.detectChanges();
    });
  }

  addNewData(): void{
    if(this.dogFormGroup.value.dogId == "" || this.dogFormGroup.value.dogName == "" || this.dogFormGroup.value.dogBreed == ""){
      this.messageTrue = false;
      console.log("the fields are empty")
    }else{
      const newDogData = {id: this.dogFormGroup.value.dogId, name: this.dogFormGroup.value.dogName, breed: this.dogFormGroup.value.dogBreed };
      this.dogsListService.createDogDetails(newDogData).subscribe(postData => {
        this.changeDetector.detectChanges();
        console.log(postData);
        this.dogsList.push(postData);
        this.messageTrue = true;
      });
    }
  }
  
  updateExistingData(): void{
    if(this.dogFormGroup.value.dogId == "" || this.dogFormGroup.value.dogName == "" || this.dogFormGroup.value.dogBreed == ""){
      this.messageTrue = false;
      console.log("the fields are empty")
    }else{
      const updateDogData = {id: this.dogFormGroup.value.dogId, name: this.dogFormGroup.value.dogName, breed: this.dogFormGroup.value.dogBreed };
      this.dogsListService.updateDogDetail(this.dogFormGroup.value.dogId, updateDogData).subscribe(updateData =>{
        console.log(updateData);
        this.dogsList.push(updateData);
        this.messageUpdateTrue = true;
      });
    }
  }
  
  deleteDataExistingData(): void{
    if(this.dogFormGroup.value.dogId == "" || this.dogFormGroup.value.dogName == "" || this.dogFormGroup.value.dogBreed == ""){
      this.messageTrue = false;
      console.log("the fields are empty")
    }else{
      this.dogsListService.deleteDogDetail(this.dogFormGroup.value.dogId).subscribe(deleteData => {
        console.log(deleteData);
        this.dogsList.pop(deleteData);
        this.messageDeleteTrue = true;
      });
    }
  }
  
}

