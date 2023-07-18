import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ANotificationPage } from './anotification.page';

describe('ANotificationPage', () => {
  let component: ANotificationPage;
  let fixture: ComponentFixture<ANotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ANotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
