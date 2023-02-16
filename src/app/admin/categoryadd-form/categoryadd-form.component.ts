import { CategoryModel } from '../../../models/CategoryModel';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryadd-form',
  templateUrl: './categoryadd-form.component.html',
  styleUrls: ['./categoryadd-form.component.css'],
})
export class CategoryaddFormComponent implements OnInit {
  categoryAdd: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAddProductForm();
  }

  createAddProductForm() {
    this.categoryAdd = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    this.categoryService.add(this.categoryAdd.value).subscribe((data) => {});
    this.toastr.success(this.categoryAdd.value.name);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
