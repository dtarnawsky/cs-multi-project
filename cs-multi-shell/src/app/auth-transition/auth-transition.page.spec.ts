import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthTransitionPage } from './auth-transition.page';

describe('AuthTransitionPage', () => {
  let component: AuthTransitionPage;
  let fixture: ComponentFixture<AuthTransitionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTransitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
