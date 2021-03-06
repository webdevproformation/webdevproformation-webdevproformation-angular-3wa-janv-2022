import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { ContactComponent } from './component/contact.component';
import { MenuComponent } from './component/menu.component';
import { LoginComponent } from './component/login.component';
import { PageComponent } from './component/page.component';
import { ClientComponent } from './component/client.component';
import { ClientOneComponent } from './component/client-one.component';
import { NotFoundComponent } from './component/not-found.component';
import { AnimationComponent } from './component/animation.component';
import { FadeComponent } from './component/fade.component';
import { AnimationSuiteComponent } from './component/animation-suite.component';
import { CustomComponent } from './component/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    LoginComponent,
    PageComponent,
    ClientComponent,
    ClientOneComponent,
    NotFoundComponent,
    AnimationComponent,
    FadeComponent,
    AnimationSuiteComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
