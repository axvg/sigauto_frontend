import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HistorialCitasPageComponent } from './historial-citas-page.component';
import { CitasService } from '@services/citas.service';

describe('HistorialCitasPageComponent', () => {
  let component: HistorialCitasPageComponent;
  let fixture: ComponentFixture<HistorialCitasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CitasService]
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