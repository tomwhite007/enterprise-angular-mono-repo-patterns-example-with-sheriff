import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCheckInComponent } from './feature-check-in.component';

describe('FeatureCheckInComponent', () => {
  let component: FeatureCheckInComponent;
  let fixture: ComponentFixture<FeatureCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCheckInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
