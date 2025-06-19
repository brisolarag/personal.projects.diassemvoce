import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureOfTheDay } from './picture-of-the-day';

describe('PictureOfTheDay', () => {
  let component: PictureOfTheDay;
  let fixture: ComponentFixture<PictureOfTheDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureOfTheDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureOfTheDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
