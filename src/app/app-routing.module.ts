import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { MasterPageComponent } from './Pages/master-page/master-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: MasterPageComponent, pathMatch: 'full', children: [
      { path: '', component: HomePageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
