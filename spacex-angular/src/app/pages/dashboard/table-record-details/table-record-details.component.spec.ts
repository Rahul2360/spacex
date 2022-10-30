import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecordDetailsComponent } from './table-record-details.component';

describe('TableRecordDetailsComponent', () => {
  let component: TableRecordDetailsComponent;
  let fixture: ComponentFixture<TableRecordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRecordDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
