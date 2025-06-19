import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueEuFizModal } from './oque-eu-fiz-modal';

describe('OQueEuFizModal', () => {
  let component: OQueEuFizModal;
  let fixture: ComponentFixture<OQueEuFizModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OQueEuFizModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OQueEuFizModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
