import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpTailwindComponent } from './set-up-tailwind.component';

describe('SetUpTailwindComponent', () => {
  let component: SetUpTailwindComponent;
  let fixture: ComponentFixture<SetUpTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetUpTailwindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUpTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
