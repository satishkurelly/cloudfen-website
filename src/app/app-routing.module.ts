import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { OurfocusComponent } from './ourfocus/ourfocus.component';
import { IndustriesComponent } from './industries/industries.component';
import { CarrersComponent } from './carrers/carrers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HealthComponent } from './health/health.component';
import { FinancialComponent } from './financial/financial.component';
import { RetailComponent } from './retail/retail.component';
import { TeleComponent } from './tele/tele.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { JobComponent } from './job/job.component';
import { RefferalComponent } from './refferal/refferal.component';

export const routes = [
  { path:'', component: HomeComponent  },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'ourfocus', component: OurfocusComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'carrers', component: CarrersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'health', component: HealthComponent},
  { path: 'financial',component: FinancialComponent},
  { path: 'retail' ,component: RetailComponent},
  { path: 'tele',component: TeleComponent },
  { path: 'manufact',component: ManufacturingComponent },
  { path: 'job', component: JobComponent},
  { path: 'refferal', component: RefferalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
