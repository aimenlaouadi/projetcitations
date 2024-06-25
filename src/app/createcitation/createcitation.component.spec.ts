import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecitationComponent } from './createcitation.component';

describe('CreatecitationComponent', () => {
  let component: CreatecitationComponent;
  let fixture: ComponentFixture<CreatecitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatecitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
