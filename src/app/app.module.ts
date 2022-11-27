import { AdminRoutes } from './routes/admin.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const router: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'null' },
  { path: 'productList', component: ProductListComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'productList', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    DashboardComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminRoutes,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
