import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecadoDia } from './recado-dia';

describe('RecadoDia', () => {
  let component: RecadoDia;
  let fixture: ComponentFixture<RecadoDia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecadoDia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecadoDia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
