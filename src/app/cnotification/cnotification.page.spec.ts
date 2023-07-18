import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CNotificationPage } from './cnotification.page';

describe('CNotificationPage', () => {
  let component: CNotificationPage;
  let fixture: ComponentFixture<CNotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
