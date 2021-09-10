import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
// import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
