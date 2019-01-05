import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsBoxComponent } from './totals-box.component';

describe('TotalsBoxComponent', () => {
  let component: TotalsBoxComponent;
  let fixture: ComponentFixture<TotalsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
