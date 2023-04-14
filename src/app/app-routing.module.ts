import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PizzaEditorComponent } from './pizza-editor/pizza-editor.component';

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'pizza-editor', component: PizzaEditorComponent}
    //{ path: 'pizza-editor/:pizza_id', component: DashboardComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}