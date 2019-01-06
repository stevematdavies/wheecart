import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWCartcountComponent } from './header-w-cartcount.component';

describe('HeaderWCartcountComponent', () => {
  let component: HeaderWCartcountComponent;
  let fixture: ComponentFixture<HeaderWCartcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWCartcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWCartcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
