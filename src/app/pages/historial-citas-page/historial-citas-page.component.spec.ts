import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCitasPageComponent } from './historial-citas-page.component';

describe('HistorialCitasPageComponent', () => {
  let component: HistorialCitasPageComponent;
  let fixture: ComponentFixture<HistorialCitasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialCitasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialCitasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
