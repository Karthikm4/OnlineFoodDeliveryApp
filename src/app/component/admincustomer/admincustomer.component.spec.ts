import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerComponent } from './admincustomer.component';

describe('AdmincustomerComponent', () => {
  let component: AdmincustomerComponent;
  let fixture: ComponentFixture<AdmincustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincustomerComponent]
    });
    fixture = TestBed.createComponent(AdmincustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
