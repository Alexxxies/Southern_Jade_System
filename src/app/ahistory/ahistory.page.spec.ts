import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AHistoryPage } from './ahistory.page';

describe('AHistoryPage', () => {
  let component: AHistoryPage;
  let fixture: ComponentFixture<AHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
