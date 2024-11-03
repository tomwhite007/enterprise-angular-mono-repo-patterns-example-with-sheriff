import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePassengerInfoComponent } from './feature-passenger-info.component';

describe('FeaturePassengerInfoComponent', () => {
  let component: FeaturePassengerInfoComponent;
  let fixture: ComponentFixture<FeaturePassengerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePassengerInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePassengerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
