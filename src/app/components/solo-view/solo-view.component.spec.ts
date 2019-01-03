import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloViewComponent } from './solo-view.component';

describe('SoloViewComponent', () => {
  let component: SoloViewComponent;
  let fixture: ComponentFixture<SoloViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
