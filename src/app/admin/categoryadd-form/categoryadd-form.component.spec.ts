import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryaddFormComponent } from './categoryadd-form.component';

describe('CategoryaddFormComponent', () => {
  let component: CategoryaddFormComponent;
  let fixture: ComponentFixture<CategoryaddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryaddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryaddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
