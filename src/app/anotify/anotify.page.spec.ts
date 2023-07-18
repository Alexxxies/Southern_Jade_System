import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ANotifyPage } from './anotify.page';

describe('ANotifyPage', () => {
  let component: ANotifyPage;
  let fixture: ComponentFixture<ANotifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ANotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
