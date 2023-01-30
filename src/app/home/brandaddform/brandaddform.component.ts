import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandaddform',
  templateUrl: './brandaddform.component.html',
  styleUrls: ['./brandaddform.component.css'],
})
export class BrandaddformComponent implements OnInit {
  brandAdd: FormGroup;
  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandAddForm();
  }

  brandAddForm() {
    this.brandAdd = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    this.brandService.add(this.brandAdd.value).subscribe((data) => {
      this.toastrService.success('başarılı eklenmiştir');
      this.router.navigate(['/dash/brandadd']);
    });
  }
}
