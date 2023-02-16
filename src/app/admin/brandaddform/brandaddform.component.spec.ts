import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandaddformComponent } from './brandaddform.component';

describe('BrandaddformComponent', () => {
  let component: BrandaddformComponent;
  let fixture: ComponentFixture<BrandaddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandaddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandaddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
