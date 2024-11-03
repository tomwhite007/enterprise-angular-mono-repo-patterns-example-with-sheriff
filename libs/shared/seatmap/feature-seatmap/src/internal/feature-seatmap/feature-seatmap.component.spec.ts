import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureSeatmapComponent } from './feature-seatmap.component';

describe('FeatureSeatmapComponent', () => {
  let component: FeatureSeatmapComponent;
  let fixture: ComponentFixture<FeatureSeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSeatmapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
