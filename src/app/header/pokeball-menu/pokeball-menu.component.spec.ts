import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballMenuComponent } from './pokeball-menu.component';

describe('PokeballMenuComponent', () => {
  let component: PokeballMenuComponent;
  let fixture: ComponentFixture<PokeballMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeballMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeballMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
