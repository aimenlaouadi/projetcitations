import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeCitationsComponent } from './creation-de-citations.component';

describe('CreationDeCitationsComponent', () => {
  let component: CreationDeCitationsComponent;
  let fixture: ComponentFixture<CreationDeCitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationDeCitationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDeCitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
