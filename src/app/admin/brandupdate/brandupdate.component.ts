import { ToastrService } from 'ngx-toastr';
import { BrandModel } from '../../../models/BrandsModel';
import { BrandService } from 'src/services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandupdate',
  templateUrl: './brandupdate.component.html',
  styleUrls: ['./brandupdate.component.css'],
})
export class BrandupdateComponent implements OnInit {
  brandUpdate: FormGroup;
  brand: BrandModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandGetById();
  }

  brandGetById() {
    this.activatedRoute.params.subscribe((params) => {
      this.getBrands(params['id']);
    });
  }
  getBrands(id) {
    this.brandService.getBrandById(id).subscribe((data) => {
      this.brand = data;
      this.updateBrandForm();
    });
  }

  updateBrandForm() {
    this.brandUpdate = this.formBuilder.group({
      name: [this.brand.name, [Validators.required]],
    });
  }
  update() {
    this.brandService
      .update(this.activatedRoute.snapshot.params['id'], this.brandUpdate.value)
      .subscribe((data) => {
        this.toastrService.success('Başarılı Güncellenmiştir');
        setTimeout(() => {
          this.router.navigate(['/dash/brand']);
        }, 3000);
      });
  }
}
