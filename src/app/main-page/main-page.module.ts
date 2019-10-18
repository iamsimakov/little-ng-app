import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { DataService } from '../data.service';

const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  // providers: [DataService]
})
export class MainPageModule { }
