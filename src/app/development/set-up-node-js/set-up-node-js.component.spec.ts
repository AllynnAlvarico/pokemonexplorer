import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpNodeJSComponent } from './set-up-node-js.component';

describe('SetUpNodeJSComponent', () => {
  let component: SetUpNodeJSComponent;
  let fixture: ComponentFixture<SetUpNodeJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetUpNodeJSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUpNodeJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
