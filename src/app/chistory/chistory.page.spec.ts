import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CHistoryPage } from './chistory.page';

describe('CHistoryPage', () => {
  let component: CHistoryPage;
  let fixture: ComponentFixture<CHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
