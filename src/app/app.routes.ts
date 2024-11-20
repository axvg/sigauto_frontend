import { Routes } from '@angular/router';
import { RegisterComponent } from '@pages/register/register.component';
import { HomeComponent } from '@pages/home/home.component';
import { VehicleRegistrationComponent } from '@components/vehicle-registration/vehicle-registration.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'register-vehiculo',  component: VehicleRegistrationComponent }
];
