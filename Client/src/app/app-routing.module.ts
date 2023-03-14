import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "info", component: InfoComponent },
  { path: "", redirectTo: "form", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
