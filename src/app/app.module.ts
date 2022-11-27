import { LearnRoutes } from './routes/learn.routing';
import { AdminRoutes } from './routes/admin.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { SimpleFormCompComponent } from './learnComponents/simple-form-comp/simple-form-comp.component';

const router: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'null' },
  { path: 'productList', component: ProductListComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productAdd', component: ProductAddComponent },
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
    LoginComponent,
    ProductAddComponent,
    SimpleFormCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutes,
    LearnRoutes,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
