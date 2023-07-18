import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CNotifyPage } from './cnotify.page';

describe('CNotifyPage', () => {
  let component: CNotifyPage;
  let fixture: ComponentFixture<CNotifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CNotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
