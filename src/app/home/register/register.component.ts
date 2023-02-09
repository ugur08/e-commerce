import { ToastrService } from 'ngx-toastr';
import { AutServiceService } from 'src/services/aut-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  reflesh: number = 1;
  constructor(
    private formBuilder: FormBuilder,
    private autServiceService: AutServiceService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      expiration: ['aa', Validators.required],
      token: ['bb', Validators.required],
      role: ['user', Validators.required],
      image: ['', Validators.required],
    });
  }

  add() {
    this.autServiceService
      .register(this.registerForm.value)
      .subscribe((data) => {});
    this.toastrService.success('Başarılı Kayıt Oldunuz');
  }
}
