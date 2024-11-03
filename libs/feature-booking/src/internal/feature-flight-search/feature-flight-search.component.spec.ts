import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureFlightSearchComponent } from './feature-flight-search.component';

describe('FeatureFlightSearchComponent', () => {
  let component: FeatureFlightSearchComponent;
  let fixture: ComponentFixture<FeatureFlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFlightSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureFlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
