import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAngularProjectComponent } from './create-angular-project.component';

describe('CreateAngularProjectComponent', () => {
  let component: CreateAngularProjectComponent;
  let fixture: ComponentFixture<CreateAngularProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAngularProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAngularProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
