import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnavbarComponent } from './dnavbar.component';

describe('DnavbarComponent', () => {
  let component: DnavbarComponent;
  let fixture: ComponentFixture<DnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
