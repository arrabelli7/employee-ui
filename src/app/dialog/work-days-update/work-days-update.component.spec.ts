import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDaysUpdateComponent } from './work-days-update.component';

describe('WorkDaysUpdateComponent', () => {
  let component: WorkDaysUpdateComponent;
  let fixture: ComponentFixture<WorkDaysUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDaysUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDaysUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
