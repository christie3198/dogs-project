import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm : FormGroup;
  checkSubmit = false;

  constructor(private fb: FormBuilder)
  {
      this.profileForm = this.fb.group({
        floatingInput: ["", Validators.required],
        floatingPassword: ["", Validators.required],
        loginCheck1: [false, Validators.requiredTrue]
      });
  }

  ngOnInit(): void {
  }
  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.checkSubmit = true
    if (this.profileForm.invalid) {
      return;
    }
    console.warn(this.profileForm.value);
  }
  onReset() {
    this.checkSubmit = false;
    this.profileForm.reset();
  }
}
