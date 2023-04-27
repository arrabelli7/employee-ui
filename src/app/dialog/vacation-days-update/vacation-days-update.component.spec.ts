import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationDaysUpdateComponent } from './vacation-days-update.component';

describe('VacationDaysUpdateComponent', () => {
  let component: VacationDaysUpdateComponent;
  let fixture: ComponentFixture<VacationDaysUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationDaysUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationDaysUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
