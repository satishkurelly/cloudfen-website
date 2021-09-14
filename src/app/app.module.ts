// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { FooterComponent } from './footer/footer.component';
// import { MatIconModule } from '@angular/material/icon';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     HomeComponent,
//     FooterComponent,
   
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     MatIconModule,
//     FontAwesomeModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { OurfocusComponent } from './ourfocus/ourfocus.component';
import { IndustriesComponent } from './industries/industries.component';
import { CarrersComponent } from './carrers/carrers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {LayoutModule} from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { HealthComponent } from './health/health.component';
import { FinancialComponent } from './financial/financial.component';
import { RetailComponent } from './retail/retail.component';
import { TeleComponent } from './tele/tele.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { JobComponent } from './job/job.component';
import { RefferalComponent } from './refferal/refferal.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    OurfocusComponent,
    IndustriesComponent,
    CarrersComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HealthComponent,
    FinancialComponent,
    RetailComponent,
    TeleComponent,
    ManufacturingComponent,
    JobComponent,
    RefferalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule ,
    MatFormFieldModule,
    LayoutModule,MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }