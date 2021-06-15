import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import{FormComponent} from './form/form.component'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'addAssignment',
  component:AddComponent
},
{
  path:'viewAssignment',
  component:ViewComponent
},
{
  path:'deleteAssignment',
  component:DeleteComponent

},
{
  path:'Demo',
  component:FormComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
