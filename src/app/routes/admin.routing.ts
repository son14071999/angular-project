import { CategoryEditComponent } from './../components/category-edit/category-edit.component';
import { CategoryAddComponent } from './../components/category-add/category-add.component';
import { CategoryListComponent } from './../components/category-list/category-list.component';
import { AuthGuard } from './auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'categoryAdd', component: CategoryAddComponent },
  { path: 'categoryList', component: CategoryListComponent },
  { path: 'categoryEdit/:id', component: CategoryEditComponent },
];

export const AdminRoutes = RouterModule.forChild(routes);
