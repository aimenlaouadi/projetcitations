import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationlistComponent } from './citationlist.component';

describe('CitationlistComponent', () => {
  let component: CitationlistComponent;
  let fixture: ComponentFixture<CitationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
