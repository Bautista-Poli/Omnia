import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoComenzarComponent } from './como-comenzar.component';

describe('ComoComenzarComponent', () => {
  let component: ComoComenzarComponent;
  let fixture: ComponentFixture<ComoComenzarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoComenzarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComoComenzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
