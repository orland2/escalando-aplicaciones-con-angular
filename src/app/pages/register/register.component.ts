import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/modules';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  isloading = false;

  constructor(private register: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.isloading = true;
      // alert(JSON.stringify(this.form.value));
      this.register.register(this.form.value).subscribe(() => {
        this.isloading = false;
      }, (reason) => {
        this.isloading = false;
        alert(JSON.stringify(reason));
      }
      );
    }
  }
}
