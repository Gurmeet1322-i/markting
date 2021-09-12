import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectsComponent } from './conects.component';

describe('ConectsComponent', () => {
  let component: ConectsComponent;
  let fixture: ComponentFixture<ConectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
