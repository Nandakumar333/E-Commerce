import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const approutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productDescription', component: ProductDescriptionComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ContactComponent,
    AboutComponent,
    ProductComponent,
    ProductDescriptionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
