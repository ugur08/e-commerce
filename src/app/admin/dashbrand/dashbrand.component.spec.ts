import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbrandComponent } from './dashbrand.component';

describe('DashbrandComponent', () => {
  let component: DashbrandComponent;
  let fixture: ComponentFixture<DashbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbrandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
