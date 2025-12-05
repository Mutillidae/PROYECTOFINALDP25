import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inicio1 } from './inicio1';

describe('Inicio1', () => {
  let component: Inicio1;
  let fixture: ComponentFixture<Inicio1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inicio1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inicio1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
