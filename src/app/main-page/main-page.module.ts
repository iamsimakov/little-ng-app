import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainPageModule {

}
