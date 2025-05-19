import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfePdfGeneratorComponent } from './nfe-pdf-generator.component';

describe('NfePdfGeneratorComponent', () => {
  let component: NfePdfGeneratorComponent;
  let fixture: ComponentFixture<NfePdfGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NfePdfGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfePdfGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
