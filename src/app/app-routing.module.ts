import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { PagesComponent }      from './pages/pages.component';
import { UploadsComponent }      from './uploads/uploads.component';
import { IndexComponent }      from './index/index.component';


const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'dashboard'	, component: DashboardComponent },
	{ path: 'pages'		, component: PagesComponent },
	{ path: 'uploads'	, component: UploadsComponent },
	{ path: 'index'		, component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }