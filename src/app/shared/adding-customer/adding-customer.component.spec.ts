import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCustomerComponent } from './adding-customer.component';

describe('AddingCustomerComponent', () => {
  let component: AddingCustomerComponent;
  let fixture: ComponentFixture<AddingCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
