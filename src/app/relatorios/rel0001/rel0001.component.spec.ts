import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rel0001Component } from './rel0001.component';

describe('Rel0001Component', () => {
  let component: Rel0001Component;
  let fixture: ComponentFixture<Rel0001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rel0001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rel0001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
