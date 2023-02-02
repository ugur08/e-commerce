import { LoginModel } from './../../../models/LoginModel';
import { ToastrService } from 'ngx-toastr';
import { AutServiceService } from './../../../services/aut-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenModel } from 'src/models/TokenModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  tokenmodel: TokenModel;

  constructor(
    private autService: AutServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.autService.login(this.loginForm.value).subscribe((data) => {
        if (data.length > 0) {
          this.toastrService.success('başarılı');
          this.setTime();
          data[0].role == 'admin'
            ? this.router.navigate(['/dash'])
            : data[0].role == 'user'
            ? this.router.navigate(['/'])
            : this.router.navigate(['/home']);

          localStorage.setItem('token', data[0].token);
          localStorage.setItem('role', data[0].role);
          localStorage.setItem('name', data[0].name);
          localStorage.setItem('image', data[0].image);
          localStorage.setItem('email', data[0].email);
          localStorage.setItem('lastName', data[0].lastName);
        } else {
          this.toastrService.warning('Kullanıcı Adı Veya Şifreniz Hatalı!!');
        }
      });
    }
  }

  setTime() {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
