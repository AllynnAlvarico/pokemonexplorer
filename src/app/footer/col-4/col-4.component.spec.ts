import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Col4Component } from './col-4.component';

describe('Col4Component', () => {
  let component: Col4Component;
  let fixture: ComponentFixture<Col4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Col4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Col4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
