import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AUserPage } from './auser.page';

describe('AUserPage', () => {
  let component: AUserPage;
  let fixture: ComponentFixture<AUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
