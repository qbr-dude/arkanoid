import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaquetComponent } from './raquet.component';

describe('RaquetComponent', () => {
  let component: RaquetComponent;
  let fixture: ComponentFixture<RaquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaquetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
