import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovenyekComponent } from './Part/novenyek/novenyek.component';
import { UjRendelesComponent } from './Part/uj-rendeles/uj-rendeles.component';

const routes: Routes = [
  {path:"novenyek", component:NovenyekComponent},
  {path:"rendeles", component:UjRendelesComponent},
  {path:"", component:NovenyekComponent},
  {path:"**", component:NovenyekComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
