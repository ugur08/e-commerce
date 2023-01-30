import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryaddComponent } from './categoryadd.component';

describe('CategoryaddComponent', () => {
  let component: CategoryaddComponent;
  let fixture: ComponentFixture<CategoryaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
