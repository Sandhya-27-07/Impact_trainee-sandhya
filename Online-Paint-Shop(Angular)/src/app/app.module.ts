import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { ContactComponent } from './contact/contact.component';
import{HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExampleComponent } from './example/example.component';
import { CategoryComponent } from './category/category.component';






@NgModule({
  declarations: [										
    AppComponent,
  
    AboutComponent,
    ContactComponent,HeaderComponent,
      HomeComponent,
      ProductComponent,
      LoginComponent,
      SignupComponent,
      ExampleComponent,
      CategoryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
    
    
    
  
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
