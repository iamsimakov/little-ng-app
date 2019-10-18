import { NgModule } from '@angular/core';
import { UploadsPageComponent } from './uploads-page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { DataService } from '../data.service';


const routes: Routes = [
  {path: 'uploads', component: UploadsPageComponent}
];

@NgModule({
  declarations: [
    UploadsPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  // providers: [DataService]
})
export class UploadsPageModule { }
