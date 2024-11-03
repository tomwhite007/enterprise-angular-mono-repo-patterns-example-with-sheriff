import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureBookingComponent } from './feature-booking.component';

describe('FeatureBookingComponent', () => {
  let component: FeatureBookingComponent;
  let fixture: ComponentFixture<FeatureBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
