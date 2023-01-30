import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddformComponent } from './productaddform.component';

describe('ProductaddformComponent', () => {
  let component: ProductaddformComponent;
  let fixture: ComponentFixture<ProductaddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductaddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductaddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
