import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseResultsComponent } from './case-results.component';

describe('CaseResultsComponent', () => {
  let component: CaseResultsComponent;
  let fixture: ComponentFixture<CaseResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
