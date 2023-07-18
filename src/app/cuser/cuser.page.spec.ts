import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUserPage } from './cuser.page';

describe('CUserPage', () => {
  let component: CUserPage;
  let fixture: ComponentFixture<CUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
