import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rel0002Component } from './rel0002.component';

describe('Rel0002Component', () => {
  let component: Rel0002Component;
  let fixture: ComponentFixture<Rel0002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rel0002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rel0002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
