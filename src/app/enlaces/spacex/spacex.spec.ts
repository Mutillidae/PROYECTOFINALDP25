import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spacex } from './spacex';

describe('Spacex', () => {
  let component: Spacex;
  let fixture: ComponentFixture<Spacex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spacex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spacex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
