import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandModel } from '../../../models/BrandsModel';
import { BrandService } from '../../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandadd',
  templateUrl: './dashbrand.component.html',
  styleUrls: ['./dashbrand.component.css'],
})
export class DashbrandComponent implements OnInit {
  brands: BrandModel[] = [];
  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrand().subscribe((data) => {
      this.brands = data;
    });
  }
  delete(id: BrandModel): void {
    if (confirm('silmek istediğine eminmimsin')) {
      this.brands = this.brands.filter((b) => b !== id);
      this.brandService.delete(id.id).subscribe();
      this.toastrService.error('başarılı silinmiştir');
      this.router.navigate(['/dash/brand']);
    }
  }
}
