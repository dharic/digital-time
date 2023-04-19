import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalTimeComponent } from './digital-time/digital-time.component';

const routes: Routes = [
  {
    path:'time',
    component:DigitalTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
