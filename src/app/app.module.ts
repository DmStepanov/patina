import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { UploadsComponent } from './uploads/uploads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { MocksService } from './mocks.service';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    UploadsComponent,
    DashboardComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [MocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
