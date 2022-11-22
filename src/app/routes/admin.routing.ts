import { AuthGuard } from './auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent, canActivate: [AuthGuard] },
];

export const AdminRoutes = RouterModule.forChild(routes);
