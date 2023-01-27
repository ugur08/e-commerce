import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdenemeComponent } from './productdeneme.component';

describe('ProductdenemeComponent', () => {
  let component: ProductdenemeComponent;
  let fixture: ComponentFixture<ProductdenemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdenemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdenemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
