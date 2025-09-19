import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipThanksComponent } from './membership-thanks.component';

describe('MembershipThanksComponent', () => {
  let component: MembershipThanksComponent;
  let fixture: ComponentFixture<MembershipThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipThanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
