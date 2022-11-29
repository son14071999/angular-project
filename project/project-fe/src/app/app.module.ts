import { RestApiService } from './services/rest-api.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { MesageComponent } from './components/mesage/mesage.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    MesageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [RestApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
