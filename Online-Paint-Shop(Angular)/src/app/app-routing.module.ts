import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ExampleComponent } from './example/example.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"category",
    component:CategoryComponent
    
  },
  {
    path:"product",
    component:ProductComponent
    
  },
  {
    path:"example",
    component:ExampleComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
