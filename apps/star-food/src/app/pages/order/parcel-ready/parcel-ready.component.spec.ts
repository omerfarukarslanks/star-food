import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelReadyComponent } from './parcel-ready.component';

describe('ParcelReadyComponent', () => {
  let component: ParcelReadyComponent;
  let fixture: ComponentFixture<ParcelReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParcelReadyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParcelReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
