import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTimeComponent } from './digital-time.component';

describe('DigitalTimeComponent', () => {
  let component: DigitalTimeComponent;
  let fixture: ComponentFixture<DigitalTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
