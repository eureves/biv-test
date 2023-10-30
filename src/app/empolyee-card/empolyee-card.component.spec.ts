import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeCardComponent } from './empolyee-card.component';

describe('EmpolyeeCardComponent', () => {
  let component: EmpolyeeCardComponent;
  let fixture: ComponentFixture<EmpolyeeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmpolyeeCardComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
