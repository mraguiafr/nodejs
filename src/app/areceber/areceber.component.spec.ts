import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreceberComponent } from './areceber.component';

describe('AreceberComponent', () => {
  let component: AreceberComponent;
  let fixture: ComponentFixture<AreceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreceberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
