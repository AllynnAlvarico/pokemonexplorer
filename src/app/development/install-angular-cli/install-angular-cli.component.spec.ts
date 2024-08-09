import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallAngularCLIComponent } from './install-angular-cli.component';

describe('InstallAngularCLIComponent', () => {
  let component: InstallAngularCLIComponent;
  let fixture: ComponentFixture<InstallAngularCLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstallAngularCLIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallAngularCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
